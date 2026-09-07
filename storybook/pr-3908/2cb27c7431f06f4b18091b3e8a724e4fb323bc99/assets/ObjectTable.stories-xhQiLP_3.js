import{j as i}from"./iframe-jVZSa0_O.js";import{O as p}from"./object-table-pRHX98Mv.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BzMIhOoI.js";import"./preload-helper-B0JsgF0Q.js";import"./Table-nVgjXAUi.js";import"./index-cz87o1u2.js";import"./Dialog-DVswX8WH.js";import"./cross-D_kf2VMY.js";import"./svgIconContainer-CCkoUGO-.js";import"./useBaseUiId-Dh7cbX1i.js";import"./InternalBackdrop-CNizCF8V.js";import"./composite-B1R1VOU-.js";import"./index-CFlWgQDO.js";import"./index-DRJcVra2.js";import"./index-D68UoJcu.js";import"./useEventCallback-BFzCFepw.js";import"./SkeletonBar-D52KZgWC.js";import"./LoadingCell-xEbKxsbK.js";import"./ColumnConfigDialog-CSIk7lHh.js";import"./DraggableList-gx-jNQAx.js";import"./search-y5GiQxVJ.js";import"./Input-DE-dqgbb.js";import"./useControlled-PPoFg-g2.js";import"./Button-ruj5eHNw.js";import"./small-cross-DW-_vWg4.js";import"./ActionButton-MDw6R0lF.js";import"./Checkbox-7WJWAj1Q.js";import"./useValueChanged-lRBuZxnF.js";import"./CollapsiblePanel-BwEkY4as.js";import"./MultiColumnSortDialog-DOQ54144.js";import"./MenuTrigger-ClD5MLDz.js";import"./CompositeItem-Bdw-jz1U.js";import"./ToolbarRootContext-W1O_4HxY.js";import"./getDisabledMountTransitionStyles-CPsauNSR.js";import"./getPseudoElementBounds-CZyxgjLi.js";import"./chevron-down-vgR9jQm9.js";import"./index-DprOP2mE.js";import"./error-BkWT_eOO.js";import"./BaseCbacBanner-DOO_uje4.js";import"./makeExternalStore-D0xCnJrG.js";import"./Tooltip-nvYgD8vA.js";import"./PopoverPopup-BkH3GWX-.js";import"./debounce-29zvw66V.js";import"./useOsdkClient-DXW6J2KM.js";import"./tick-y1p0xcrN.js";import"./DropdownField-B7ayEcBh.js";import"./isEqual-kMY5ydKZ.js";import"./withOsdkMetrics-C6vVTJkI.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns
  },
  parameters: {
    docs: {
      description: {
        story: "Minimal setup showing Employee data with default column definitions."
      },
      source: {
        code: \`<ObjectTable objectType={Employee} />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>,
  // Loads data, then opens a column header menu to confirm the default,
  // out-of-the-box header features are all present.
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Wait for the (MSW-mocked) rows to load.
    await canvas.findByText(TARGET_DATA);
    await openHeaderMenu(canvas, "fullName");
    await expect(await screen.findByRole("menuitem", {
      name: "Sort ascending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Sort descending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Pin column"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Configure Columns"
    })).toBeInTheDocument();

    // Dismiss the menu so the story is left in a clean state.
    await userEvent.keyboard("{Escape}");
  }
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const de=["Default"];export{n as Default,de as __namedExportsOrder,ue as default};
