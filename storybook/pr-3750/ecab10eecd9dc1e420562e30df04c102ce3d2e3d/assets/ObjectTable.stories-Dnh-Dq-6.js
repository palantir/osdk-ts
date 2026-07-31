import{j as i}from"./iframe-DpDxhrTk.js";import{O as p}from"./object-table-DpLeGqXq.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C6ePsu6J.js";import"./preload-helper-C3Wongev.js";import"./Table-D__ecISP.js";import"./index-BesxUkRl.js";import"./Dialog-3r0RUKgh.js";import"./cross-BPqRdDax.js";import"./svgIconContainer-BSn34rPU.js";import"./useBaseUiId-ZtxZdVDB.js";import"./InternalBackdrop-DMpRBF_4.js";import"./composite-XVS2lbRG.js";import"./index-DO-yw_mS.js";import"./index-CPnh_BhQ.js";import"./index-zItwV_e4.js";import"./useEventCallback-DkkG2KLw.js";import"./SkeletonBar-BUpoYDjZ.js";import"./LoadingCell-BP6FuaET.js";import"./ColumnConfigDialog-fauuEGe4.js";import"./DraggableList-CuBxnKUd.js";import"./search-FgzO_a7-.js";import"./Input-MJ2Nqs1U.js";import"./useControlled-oqkSa6n9.js";import"./isEqual-DThBZozb.js";import"./isObject-CJIWK_vn.js";import"./Button-xd1UXX3d.js";import"./ActionButton-DtlR_WNL.js";import"./Checkbox-B8mHIVlE.js";import"./useValueChanged-ffuaPj-Z.js";import"./CollapsiblePanel-Dv4TEUmo.js";import"./MultiColumnSortDialog-CwhqCqSu.js";import"./MenuTrigger-CHtag5-t.js";import"./CompositeItem-ClvJg4YM.js";import"./ToolbarRootContext-BdbZ8fbN.js";import"./getDisabledMountTransitionStyles-CP-VJqsI.js";import"./getPseudoElementBounds-CSHzYojk.js";import"./chevron-down-DNQ2sG7I.js";import"./index-knwwMd04.js";import"./error-0_EDGuUl.js";import"./BaseCbacBanner-CQZ0vW5e.js";import"./makeExternalStore-DfqxgRvK.js";import"./Tooltip-D84FofUL.js";import"./PopoverPopup-9oTcJ550.js";import"./toNumber-DPAMxLOu.js";import"./useOsdkClient-ufKnbjui.js";import"./tick-B774pe3v.js";import"./DropdownField-CXjer42C.js";import"./withOsdkMetrics-BoydcYO1.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
