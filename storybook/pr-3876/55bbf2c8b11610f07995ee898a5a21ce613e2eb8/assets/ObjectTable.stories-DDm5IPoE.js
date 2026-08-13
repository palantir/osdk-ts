import{j as i}from"./iframe-C_rZf8VU.js";import{O as p}from"./object-table-CwP_L3yg.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-sRKVWKZ6.js";import"./preload-helper-BDRz06lj.js";import"./Table-DQaGNjjt.js";import"./index-0eoKNTmj.js";import"./Dialog-q1r-7MiE.js";import"./cross-C3Hnu-vp.js";import"./svgIconContainer-DQ_1btmp.js";import"./useBaseUiId-D4-miswd.js";import"./InternalBackdrop-BCxf0-By.js";import"./composite-CvGq7Rf9.js";import"./index-CV71ZL8j.js";import"./index-O2QWzze5.js";import"./index-B_8p8EH4.js";import"./useEventCallback-Dy0HhCrk.js";import"./SkeletonBar-DSYT3zdb.js";import"./LoadingCell-BSsS0iXL.js";import"./ColumnConfigDialog-uqYaCTA0.js";import"./DraggableList-DXpXY8d1.js";import"./search-5vADHBeS.js";import"./Input-B7jGxhwp.js";import"./useControlled-CAVvn1qm.js";import"./Button-DzuEmTO3.js";import"./small-cross-BSHgA079.js";import"./ActionButton-Na4bFdW8.js";import"./Checkbox-C7OL2cgq.js";import"./useValueChanged-BspZn8k7.js";import"./CollapsiblePanel-B5U_WwWE.js";import"./MultiColumnSortDialog-DqBAFtby.js";import"./MenuTrigger-Cg_3KtYd.js";import"./CompositeItem-BHXn5rIh.js";import"./ToolbarRootContext-ncvyqHVi.js";import"./getDisabledMountTransitionStyles-BEDXLny9.js";import"./getPseudoElementBounds-B1jeYaEO.js";import"./chevron-down-A3EFqNUF.js";import"./index-BlIltlDF.js";import"./error-C3qfOBR-.js";import"./BaseCbacBanner-D-ohkDMr.js";import"./makeExternalStore-a58P_dwm.js";import"./Tooltip-CxgKwOqt.js";import"./PopoverPopup-BFRd-H_J.js";import"./debounce-DCq12VV4.js";import"./useOsdkClient-Zp4XTgCz.js";import"./tick-CJhEW7Gm.js";import"./DropdownField-B8sfwSB7.js";import"./isEqual-C1BUS40T.js";import"./withOsdkMetrics-Br1MzUKy.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
