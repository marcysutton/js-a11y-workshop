// This is a more complete example of an autocomplete component
// with custom styling, filtering of objects, and more.
// Much of the irrelevant bits are in the ../shared file.
// which you may also want to become familiar with as many
// examples will use those as well.
import React from 'react'
import Downshift from 'downshift'
import {
  Label,
  Menu,
  ControllerButton,
  Input,
  Item,
  ArrowIcon,
  XIcon,
  css,
  itemToString,
  getItems,
} from './downshift-utils'

class Autocomplete extends React.Component {
  render() {
    return (
      <div
        {...css({
          display: 'flex',
          flexDirection: 'column',
          marginTop: 50,
        })}
      >
        <Downshift
          onChange={selection =>
            alert(
              selection
                ? `You selected ${itemToString(selection)}`
                : 'selection cleared',
            )
          }
          itemToString={itemToString}
        >
          {({
            getLabelProps,
            getInputProps,
            getToggleButtonProps,
            getMenuProps,
            getItemProps,
            isOpen,
            clearSelection,
            selectedItem,
            inputValue,
            highlightedIndex,
          }) => (
            <div {...css({width: 300, margin: 'auto'})}>
              <Label {...getLabelProps()}>Find a Star Wars character</Label>
              <div {...css({position: 'relative', fontSize: '1rem'})}>
                <Input
                  {...getInputProps({
                    isOpen,
                    placeholder: 'Enter a name',
                  })}
                />
                {selectedItem ? (
                  <ControllerButton
                    onClick={clearSelection}
                    aria-label="clear selection"
                  >
                    <XIcon />
                  </ControllerButton>
                ) : (
                  <ControllerButton {...getToggleButtonProps()}>
                    <ArrowIcon isOpen={isOpen} />
                  </ControllerButton>
                )}
              </div>
              <div {...css({position: 'relative'})}>
                <Menu {...getMenuProps({isOpen})}>
                  {isOpen
                    ? getItems(inputValue).map((item, index) => (
                        <Item
                          key={item.id}
                          {...getItemProps({
                            item,
                            index,
                            isActive: highlightedIndex === index,
                            isSelected: selectedItem === item,
                          })}
                        >
                          {itemToString(item)}
                        </Item>
                      ))
                    : null}
                </Menu>
              </div>
            </div>
          )}
        </Downshift>
      </div>
    )
  }
}

export default Autocomplete