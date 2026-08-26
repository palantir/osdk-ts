import{j as i}from"./iframe-BLZOZW6T.js";import{O as p}from"./object-table-DqxkZbgO.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CRAi0DF8.js";import"./preload-helper-BHT5lAru.js";import"./Table-dx6pwWIS.js";import"./index-Ahi5oMOt.js";import"./Dialog-GVs4rX3z.js";import"./cross-tEyjMRHD.js";import"./svgIconContainer-5vRPxuG5.js";import"./useBaseUiId-DZK7RG_f.js";import"./InternalBackdrop-iNO5Vei7.js";import"./composite-CRbvEibM.js";import"./index-DTxc1Osh.js";import"./index-ew_UyycK.js";import"./index-hsRhqC-3.js";import"./useEventCallback-DEsWc7Yx.js";import"./SkeletonBar-DMlEsaA0.js";import"./LoadingCell-C_e88Nbd.js";import"./ColumnConfigDialog-Ca0TTFpY.js";import"./DraggableList-DHxzUxXi.js";import"./search-FYqqa5v1.js";import"./Input-BOnD-W6r.js";import"./useControlled-COYf85Oy.js";import"./Button-DIO4S2kj.js";import"./small-cross-B3UhGftV.js";import"./ActionButton-C5lrJG63.js";import"./Checkbox-DNqoME2L.js";import"./useValueChanged-E7YHGw8y.js";import"./CollapsiblePanel-CTIviYDr.js";import"./MultiColumnSortDialog-B_1MQGgn.js";import"./MenuTrigger-KIj5uwST.js";import"./CompositeItem-C1uYFHLI.js";import"./ToolbarRootContext-J2Xa_TG-.js";import"./getDisabledMountTransitionStyles-CHVkErr4.js";import"./getPseudoElementBounds-BrWb8Yo6.js";import"./chevron-down-Cs3lx4vz.js";import"./index-DwKU9nYV.js";import"./error-BZramTgy.js";import"./BaseCbacBanner-cnlNeaYN.js";import"./makeExternalStore-M7RjktEr.js";import"./Tooltip-DphF3Fsm.js";import"./PopoverPopup-dw0h2vwP.js";import"./debounce-BZPHVZxa.js";import"./useOsdkClient-D8U812ID.js";import"./tick-C0OJoswb.js";import"./DropdownField-L_MoXsHP.js";import"./isEqual-DwVE72P3.js";import"./withOsdkMetrics-CD2XJjA_.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
