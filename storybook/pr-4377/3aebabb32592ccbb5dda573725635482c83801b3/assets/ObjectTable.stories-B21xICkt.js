import{j as i}from"./iframe-DgulMOaF.js";import{O as p}from"./object-table-BE9PrV5Q.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CTcyIhWt.js";import"./preload-helper-Dl5VLDEn.js";import"./Table-iEMVH5EZ.js";import"./index-dtvh1Mr6.js";import"./Dialog-CCiglHdn.js";import"./cross-y6EWAWli.js";import"./svgIconContainer-Ba3T_jNO.js";import"./useBaseUiId-BS6Gc1dg.js";import"./InternalBackdrop-Ly5OJmUB.js";import"./composite-Cb3XgmrA.js";import"./index-PgG1IVJP.js";import"./index-CNbeLsb0.js";import"./index-JiBe7OC4.js";import"./useEventCallback-DZy8oh12.js";import"./SkeletonBar-C8sXh3Sa.js";import"./LoadingCell-s4-j_O0M.js";import"./ColumnConfigDialog-iGQ7_TVF.js";import"./DraggableList-CNw9V9JY.js";import"./search-TtbfO7CA.js";import"./Input-CtG2S7FH.js";import"./useControlled-CvnKakZJ.js";import"./Button-DlQAkLGN.js";import"./small-cross-BGpqY9GM.js";import"./ActionButton-swW5gfvP.js";import"./Checkbox-C1sExpKl.js";import"./useValueChanged-RALpMVtl.js";import"./CollapsiblePanel-d1WdyLj1.js";import"./MultiColumnSortDialog-3gdPQP_r.js";import"./MenuTrigger-BSmaq8rG.js";import"./CompositeItem-D1z33XFc.js";import"./ToolbarRootContext-fgw45yYw.js";import"./getDisabledMountTransitionStyles-DCKwnIRA.js";import"./getPseudoElementBounds-Bs14F1Jl.js";import"./chevron-down-ClbU1eSU.js";import"./index-qbkePvxR.js";import"./error-ddwbLDxk.js";import"./BaseCbacBanner-Yjl8pPyk.js";import"./makeExternalStore-DI6My3xA.js";import"./Tooltip-BMCI_jgq.js";import"./isObject-Beq8HikT.js";import"./debounce-C6yDT9Ro.js";import"./useOsdkClient-BO4WVOaj.js";import"./tick-Dcu7xHQ4.js";import"./DropdownField-D_qIBFAn.js";import"./isEqual-B-zwh2La.js";import"./_baseIsEqual-CBffLuYw.js";import"./withOsdkMetrics-Baexeub2.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
