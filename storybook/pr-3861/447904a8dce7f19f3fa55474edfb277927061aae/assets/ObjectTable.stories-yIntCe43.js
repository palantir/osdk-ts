import{j as i}from"./iframe-DKy1AV9s.js";import{O as p}from"./object-table-B9HBiAT2.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CK6hhbJY.js";import"./preload-helper-BQnNVSqD.js";import"./Table-CgA0pJZo.js";import"./index-Du9AgFeI.js";import"./Dialog-CzH2sOkG.js";import"./cross-DWvNM6aD.js";import"./svgIconContainer-CmdDPKdW.js";import"./useBaseUiId-DXR-gGQN.js";import"./InternalBackdrop-Hx_fAg69.js";import"./composite-DIA_5bjb.js";import"./index-DYHGdsLl.js";import"./index-WeJ_Lope.js";import"./index-_0GvayOq.js";import"./useEventCallback-Dr0GHl4b.js";import"./SkeletonBar-5tg7WMK9.js";import"./LoadingCell-BRyArc3C.js";import"./ColumnConfigDialog-DIDxiY08.js";import"./DraggableList-CQBonzRI.js";import"./search-CoqdhJoi.js";import"./Input-ClkjPeCn.js";import"./useControlled-BeCa4j1K.js";import"./Button-CT75AnP8.js";import"./small-cross-B73khPHd.js";import"./ActionButton-Ch5xzSjH.js";import"./Checkbox-yfgCXt3G.js";import"./useValueChanged-Dzc4R6hM.js";import"./CollapsiblePanel-XdZ5rNxN.js";import"./MultiColumnSortDialog-Be3EoEW-.js";import"./MenuTrigger-DEiICrj5.js";import"./CompositeItem-D1YEdKX1.js";import"./ToolbarRootContext-B96YkNbH.js";import"./getDisabledMountTransitionStyles-DMo4BEvH.js";import"./getPseudoElementBounds-8aym6eDS.js";import"./chevron-down-BgiHHBSL.js";import"./index-DUh9Rd_7.js";import"./error-B2JG09GC.js";import"./BaseCbacBanner-DaWThKyM.js";import"./makeExternalStore-O-ViDFSd.js";import"./Tooltip-STNIv-wy.js";import"./PopoverPopup-Bt_JvPjL.js";import"./debounce-De_uQl3O.js";import"./useOsdkClient-BTgiLzGJ.js";import"./tick-CPA85Yzm.js";import"./DropdownField-CoeAa-lS.js";import"./isEqual-DGhgqELw.js";import"./withOsdkMetrics-DmspcQnU.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
