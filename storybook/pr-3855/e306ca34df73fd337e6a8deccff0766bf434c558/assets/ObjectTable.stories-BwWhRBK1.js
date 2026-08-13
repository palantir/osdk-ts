import{j as i}from"./iframe-BJrSrRma.js";import{O as p}from"./object-table-CE2q3N5f.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CQpFY7SR.js";import"./preload-helper-83yR054m.js";import"./Table-DQw_Fm5L.js";import"./index-DFXfJE3M.js";import"./Dialog-CIeMT4_a.js";import"./cross-DFiuK2I5.js";import"./svgIconContainer-CUA3xiLW.js";import"./useBaseUiId-BdZoOrU1.js";import"./InternalBackdrop-CX1L_1sQ.js";import"./composite-DimSL5Dw.js";import"./index-Cxlf7HqO.js";import"./index-BaVB7RYf.js";import"./index-DwJoAW6Z.js";import"./useEventCallback-C_smlSfI.js";import"./SkeletonBar-7oNPY7ub.js";import"./LoadingCell-Cx8g6Kor.js";import"./ColumnConfigDialog-DqDhi-7s.js";import"./DraggableList-B1TTFqcD.js";import"./search-Bcym4jdA.js";import"./Input-bMqivlqR.js";import"./useControlled-D5g6V7fQ.js";import"./Button-DWYMaUrj.js";import"./small-cross-Bj4sfQyy.js";import"./ActionButton-CwBTvNNT.js";import"./Checkbox-BvzX-4RF.js";import"./useValueChanged-Bwvej-Ce.js";import"./CollapsiblePanel-5Ce4VwIJ.js";import"./MultiColumnSortDialog-ClipWpCL.js";import"./MenuTrigger-CAbN0KqP.js";import"./CompositeItem-je4-aaCh.js";import"./ToolbarRootContext-CM7Fz4lg.js";import"./getDisabledMountTransitionStyles-DkpoARP_.js";import"./getPseudoElementBounds-BoflN6Xu.js";import"./chevron-down-CP4830r-.js";import"./index-w5EjZqSi.js";import"./error-lgLbUxfX.js";import"./BaseCbacBanner-GDLEtZZt.js";import"./makeExternalStore-BJhWzj4_.js";import"./Tooltip-I_exNZ7U.js";import"./PopoverPopup-DA2ANurn.js";import"./toNumber-DkdmQXwg.js";import"./useOsdkClient-CBENBplO.js";import"./tick-DgQBhy3o.js";import"./DropdownField-t3qnicyE.js";import"./withOsdkMetrics-DyVFL9JC.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,le={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const ue=["Default"];export{n as Default,ue as __namedExportsOrder,le as default};
