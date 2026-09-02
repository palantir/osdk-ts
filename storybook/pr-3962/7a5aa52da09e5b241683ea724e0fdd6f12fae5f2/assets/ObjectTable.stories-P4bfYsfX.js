import{j as i}from"./iframe-BMR09Kil.js";import{O as p}from"./object-table-C3iga_h5.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CJ76qXON.js";import"./preload-helper-ibIringt.js";import"./Table-IwMRkVWK.js";import"./index-kb2gRuUI.js";import"./Dialog-DuoiCwHj.js";import"./cross-BJiHelFR.js";import"./svgIconContainer-Dz8rpqsG.js";import"./useBaseUiId-BrR-DAr4.js";import"./InternalBackdrop-9I6g5hQb.js";import"./composite-DEwDT13v.js";import"./index-BhKcBDQn.js";import"./index-DbMijjyJ.js";import"./index-UHkWCkXY.js";import"./useEventCallback-D_XJGpwY.js";import"./SkeletonBar-CI9jZmfm.js";import"./LoadingCell-CI68OwAB.js";import"./ColumnConfigDialog-Cb71Y2yT.js";import"./DraggableList-BYdz-BRt.js";import"./search-CRp3aPu6.js";import"./Input-C_38At4g.js";import"./useControlled-B61TAugk.js";import"./Button-BFYlz1Yp.js";import"./small-cross-CyEjcHAp.js";import"./ActionButton-Bi5VWO6H.js";import"./Checkbox-D0REpKya.js";import"./useValueChanged-BaQpGzAR.js";import"./CollapsiblePanel-DHQ1AqF9.js";import"./MultiColumnSortDialog-BYx3Jqz2.js";import"./MenuTrigger-D4rESh74.js";import"./CompositeItem-C-tDKeCj.js";import"./ToolbarRootContext-DfEHvgT5.js";import"./getDisabledMountTransitionStyles-pJAOA3nr.js";import"./getPseudoElementBounds-B6ICeRFa.js";import"./chevron-down-CN8cLhcC.js";import"./index-DrOIQ7Hj.js";import"./error-DuXRxQxW.js";import"./BaseCbacBanner-Ca-I1NS9.js";import"./makeExternalStore-nFkPZ8WP.js";import"./Tooltip-ht3E5gE3.js";import"./PopoverPopup-DjHK7GgL.js";import"./debounce-CAE2VCrS.js";import"./useOsdkClient-Sc-BWgcu.js";import"./tick-B4tcRZmd.js";import"./DropdownField-CWaHSYgi.js";import"./isEqual-DMttQ-x3.js";import"./withOsdkMetrics-BoN8aVN7.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
