import{j as i}from"./iframe-BPE8geBj.js";import{O as p}from"./object-table-BUSbSmjJ.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-ChbaIzLt.js";import"./preload-helper-fxHDaWWz.js";import"./Table-BEgmw1vD.js";import"./index-BSCIcc2m.js";import"./Dialog-BDaN3rPU.js";import"./cross-BmJ5axqh.js";import"./svgIconContainer-Ch3CgPVe.js";import"./useBaseUiId-S4ycFjYQ.js";import"./InternalBackdrop-Dj4dXGlo.js";import"./composite-CvIKG9hN.js";import"./index-BOd13PhS.js";import"./index-D5QkM80p.js";import"./index-NexOwd4z.js";import"./useEventCallback-BGn_PaqW.js";import"./SkeletonBar-D2dwSU1W.js";import"./LoadingCell-D_WdiVbu.js";import"./ColumnConfigDialog-vVtlFWXW.js";import"./DraggableList-CSB3L_Q1.js";import"./search-D5bB9k-q.js";import"./Input-RElBojM0.js";import"./useControlled-C86FBi_K.js";import"./Button-DB75dhIR.js";import"./small-cross-BIQb8x3u.js";import"./ActionButton-BhhH_yCm.js";import"./Checkbox-BW3oz--1.js";import"./useValueChanged-CvoSBU76.js";import"./CollapsiblePanel-Dsa02cUE.js";import"./MultiColumnSortDialog-BpXI002I.js";import"./MenuTrigger-Dr4S107K.js";import"./CompositeItem-DoL9OBNh.js";import"./ToolbarRootContext-Cyb9Wm9w.js";import"./getDisabledMountTransitionStyles-BiO89QFU.js";import"./getPseudoElementBounds-bxwDp6fo.js";import"./chevron-down-CqglXqG-.js";import"./index-Da6xMdfJ.js";import"./error-BXvIUBOQ.js";import"./BaseCbacBanner-Bkw0yDve.js";import"./makeExternalStore-Bb0lbQEV.js";import"./Tooltip-CXKx2My9.js";import"./isObject-CIH_inO5.js";import"./debounce-CqZnwFp7.js";import"./useOsdkClient-BdzCkRzQ.js";import"./tick-BSHV8J2-.js";import"./DropdownField-D2YaoN7_.js";import"./isEqual-CHAxf8OA.js";import"./_baseIsEqual-B-Mt0Kfj.js";import"./withOsdkMetrics-BtOTCRxI.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const ye=["Default"];export{n as Default,ye as __namedExportsOrder,de as default};
