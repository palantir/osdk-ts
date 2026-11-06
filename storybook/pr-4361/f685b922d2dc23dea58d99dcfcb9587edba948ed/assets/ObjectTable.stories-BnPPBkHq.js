import{j as i}from"./iframe-BVSi64oE.js";import{O as p}from"./object-table-BUfh-0cO.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DqFBLvtZ.js";import"./preload-helper-BU1z3h6W.js";import"./Table-ByCJSYQA.js";import"./index-CuytY3fR.js";import"./Dialog-DRQ9HBjw.js";import"./cross-BSD5cpOi.js";import"./svgIconContainer-DOaF4Z7d.js";import"./useBaseUiId-CqqBN_pD.js";import"./InternalBackdrop-VS02Mzpv.js";import"./composite-iCAL7ZoF.js";import"./index-XyA3IOnM.js";import"./index-De4RyO4Q.js";import"./index-DUkSDzym.js";import"./useEventCallback-BcINQZvV.js";import"./SkeletonBar-BTvQIWmF.js";import"./LoadingCell-B6ep17sU.js";import"./ColumnConfigDialog-DUAoYgYr.js";import"./DraggableList-DvSKYvbS.js";import"./search-DCcotSfq.js";import"./Input-9e4VYX3J.js";import"./useControlled-oPybVTav.js";import"./Button-BWzl1MwA.js";import"./small-cross-VuonqlHg.js";import"./ActionButton-B1cEW1Xi.js";import"./Checkbox-loiJC6ut.js";import"./useValueChanged-DLdh8GlI.js";import"./CollapsiblePanel-iyQmEFH5.js";import"./MultiColumnSortDialog-CORMbeTK.js";import"./MenuTrigger-CVT83sfS.js";import"./CompositeItem-D9Lav6h_.js";import"./ToolbarRootContext-nMjJNdxo.js";import"./getDisabledMountTransitionStyles-DOr5eM0I.js";import"./getPseudoElementBounds-m7eRXhrV.js";import"./chevron-down-B1I3Tews.js";import"./index-DhvfxU91.js";import"./error-DNoXedqp.js";import"./BaseCbacBanner-DnPVzRzm.js";import"./makeExternalStore-BZP7re_5.js";import"./Tooltip-qdMmTZin.js";import"./isObject-CZdk459R.js";import"./debounce-BY-7KZ0_.js";import"./useOsdkClient-D_sxubmW.js";import"./tick-Bve-lzI5.js";import"./DropdownField-BS4JU7i-.js";import"./isEqual-Dd4C4IGQ.js";import"./_baseIsEqual-B22c0qJi.js";import"./withOsdkMetrics-DG2TDFRU.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
