import{j as i}from"./iframe-Cd3assbj.js";import{O as p}from"./object-table-C_4Wdn3N.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BahMLTB0.js";import"./preload-helper-CJDETHpR.js";import"./Table-fpqkWRlu.js";import"./index-CuezTBwu.js";import"./Dialog-DD6q0N6r.js";import"./cross-BWupVKMA.js";import"./svgIconContainer-mKWT46Ew.js";import"./useBaseUiId-BiXP69FS.js";import"./InternalBackdrop-Bfk48BSq.js";import"./composite-Ba6K1tVR.js";import"./index-BAIR5AIA.js";import"./index-Z1uxp6Qk.js";import"./index-CwyP96WI.js";import"./useEventCallback-CeMIqilU.js";import"./SkeletonBar-Cic0iWBu.js";import"./LoadingCell-WSwJSa42.js";import"./ColumnConfigDialog-D1iMsssx.js";import"./DraggableList-ClnuHX0a.js";import"./search-DpDuiZ1l.js";import"./Input-CNsHRcz9.js";import"./useControlled-C6IOb7yO.js";import"./Button-DL7dr6Eo.js";import"./small-cross-D0ffFCO-.js";import"./ActionButton-CJgwBqar.js";import"./Checkbox-DVavq1Vw.js";import"./useValueChanged-BUUaJ7qm.js";import"./CollapsiblePanel-_KRgjImS.js";import"./MultiColumnSortDialog-u-IZRocT.js";import"./MenuTrigger-TQRmhiQT.js";import"./CompositeItem-Bvq7b2TM.js";import"./ToolbarRootContext-8Wniw3sv.js";import"./getDisabledMountTransitionStyles-JnE9U1PQ.js";import"./getPseudoElementBounds-DSs2TMmL.js";import"./chevron-down-CJuFpDqg.js";import"./index-N34x7HCr.js";import"./error-DnfhABs7.js";import"./BaseCbacBanner-DADEXJEh.js";import"./makeExternalStore-BWQlbo1w.js";import"./Tooltip-CtacdFMY.js";import"./PopoverPopup-vz2lsMDk.js";import"./debounce-BBOLVlWE.js";import"./useOsdkClient-5X7bez4P.js";import"./tick-CiqYFsfj.js";import"./DropdownField-CwGIbooA.js";import"./isEqual-CwKKTIZp.js";import"./withOsdkMetrics-CmAk2EDk.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
