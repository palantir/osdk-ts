import{j as i}from"./iframe-Cf0qyGmO.js";import{O as p}from"./object-table-B3dUEJgW.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C5aBH6p0.js";import"./preload-helper-FPWMSdmp.js";import"./Table-C96eoQ6L.js";import"./index-BgodPvXa.js";import"./Dialog-1ooC9KhB.js";import"./cross-Dw3cMUV6.js";import"./svgIconContainer-Cf6GYh8C.js";import"./useBaseUiId-BYXJoihF.js";import"./InternalBackdrop-Cr8_GTkt.js";import"./composite-C4psFksR.js";import"./index-vIhG0vhZ.js";import"./index-_vrq9vUl.js";import"./index-DcVAYh3u.js";import"./useEventCallback-D6E5ELqq.js";import"./SkeletonBar-B3eK4lrr.js";import"./LoadingCell-zmT-jdAw.js";import"./ColumnConfigDialog-BiFwCQUt.js";import"./DraggableList-CfAVftDP.js";import"./search-CjtKZYOm.js";import"./Input-DeGiuUjm.js";import"./useControlled-BC5mDRRe.js";import"./Button-QXRQZjdg.js";import"./small-cross-BtxyZWiR.js";import"./ActionButton-CagVTzlG.js";import"./Checkbox-CYDFVU58.js";import"./useValueChanged-Iv8KZjJ4.js";import"./CollapsiblePanel-CzQfHLf4.js";import"./MultiColumnSortDialog-vANMZoGL.js";import"./MenuTrigger-3jyGR3ne.js";import"./CompositeItem-Hv8dpGL2.js";import"./ToolbarRootContext-BEgrRK88.js";import"./getDisabledMountTransitionStyles-D1czWqQx.js";import"./getPseudoElementBounds-D7l6Y_as.js";import"./chevron-down-CciGsrf9.js";import"./index-DsFZ6bc6.js";import"./error-CneFkgZH.js";import"./BaseCbacBanner-CF3yMDO2.js";import"./makeExternalStore-Do5TdYdF.js";import"./Tooltip-D8djcuHS.js";import"./PopoverPopup-CAL-bmct.js";import"./debounce-qcOHSgKC.js";import"./useOsdkClient-Blulg0DK.js";import"./tick-YNlQehLt.js";import"./DropdownField-BNhZxXTj.js";import"./isEqual-zZcIegst.js";import"./withOsdkMetrics-T_QycJJf.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
