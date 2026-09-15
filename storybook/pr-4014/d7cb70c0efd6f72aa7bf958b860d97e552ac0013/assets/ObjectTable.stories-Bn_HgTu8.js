import{j as i}from"./iframe-Cmyuw2Ph.js";import{O as p}from"./object-table-CawhF4-U.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DBN1bwiB.js";import"./preload-helper-BdOHKbj_.js";import"./Table-BY0MFWMS.js";import"./index-DmkTpiQF.js";import"./Dialog-uqtrzIbG.js";import"./cross-DgRED2Y7.js";import"./svgIconContainer-kIxwS322.js";import"./useBaseUiId-BKvwKpWC.js";import"./InternalBackdrop-aC0FPmUr.js";import"./composite-BApZsjKv.js";import"./index-DdBzIF29.js";import"./index-Cy1dz_-E.js";import"./index-DrYEH3ho.js";import"./useEventCallback-D2P37CA4.js";import"./SkeletonBar-BFEabyG6.js";import"./LoadingCell-DWhEU-Sm.js";import"./ColumnConfigDialog-BjRzXQ2B.js";import"./DraggableList-Dx2ER0hA.js";import"./search-MWYwj9aD.js";import"./Input-DF2j3Inj.js";import"./useControlled-1Ry22NdV.js";import"./Button-Cgurdd-l.js";import"./small-cross-B-7R2q8G.js";import"./ActionButton-BwGzlO-h.js";import"./Checkbox-DGGzqo-s.js";import"./useValueChanged-C6zv_ojv.js";import"./CollapsiblePanel-DIQ0ICSn.js";import"./MultiColumnSortDialog-BtDphT88.js";import"./MenuTrigger-BEFYxjmP.js";import"./CompositeItem-Bm_UDkTp.js";import"./ToolbarRootContext-Bziyhvzk.js";import"./getDisabledMountTransitionStyles-A2_XJssl.js";import"./getPseudoElementBounds-C24zyg7W.js";import"./chevron-down-DihUPRd8.js";import"./index-BIIUg6ti.js";import"./error-BVkhCBJN.js";import"./BaseCbacBanner-nzEPUeti.js";import"./makeExternalStore-D1HySzYn.js";import"./Tooltip-DJOnRYv9.js";import"./PopoverPopup-BFna4Wvy.js";import"./debounce-YjruCfws.js";import"./useOsdkClient-Bhx478d6.js";import"./tick-Ci4PnMCw.js";import"./DropdownField-BYzSEZU3.js";import"./isEqual-3pvGkThH.js";import"./withOsdkMetrics-DCjep4oi.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
