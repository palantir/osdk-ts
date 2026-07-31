import{j as i}from"./iframe-DDyklOqc.js";import{O as p}from"./object-table-plfjXVhz.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B9cyJ737.js";import"./preload-helper-zGI7Yyr8.js";import"./Table-CHP-tiia.js";import"./index-Cq1GlceI.js";import"./Dialog-CYMrzqcv.js";import"./cross-cqgsxvxK.js";import"./svgIconContainer-DYYBsVyS.js";import"./useBaseUiId-CL2qao4v.js";import"./InternalBackdrop-Do63knsO.js";import"./composite-DjHmc_aQ.js";import"./index-Hm27E7QB.js";import"./index-NsWDHRkU.js";import"./index-DNqPsVHJ.js";import"./useEventCallback-CiM_Yr5w.js";import"./SkeletonBar-DcAh4PoS.js";import"./LoadingCell-Bi8NE8uS.js";import"./ColumnConfigDialog-BPb1WDDZ.js";import"./DraggableList-DxfKbIWf.js";import"./search-C4C3nIjd.js";import"./Input-D2DBw9lp.js";import"./useControlled-cTNIA0eo.js";import"./isEqual-BVfWVCyt.js";import"./isObject-DBoXRpxl.js";import"./Button-LADwC7On.js";import"./ActionButton-BrPzztGK.js";import"./Checkbox-BFbJNOg7.js";import"./useValueChanged-9WP7sBg-.js";import"./CollapsiblePanel-jsS8Tk9z.js";import"./MultiColumnSortDialog-BWVf6mZp.js";import"./MenuTrigger-RBmJHBav.js";import"./CompositeItem-5eebd8XY.js";import"./ToolbarRootContext-D_6EPlUH.js";import"./getDisabledMountTransitionStyles-Ccd2Ddlb.js";import"./getPseudoElementBounds-CaNVnY9n.js";import"./chevron-down-1ywypSY9.js";import"./index-BCJ7CEmI.js";import"./error-LXH3sKTV.js";import"./BaseCbacBanner-37-ItXHV.js";import"./makeExternalStore-CLRDsfbG.js";import"./Tooltip-CvX6YdpZ.js";import"./PopoverPopup-DoVtkP7T.js";import"./toNumber-Bru-kF0D.js";import"./useOsdkClient-BNFTlwlc.js";import"./tick-BWj2vwKM.js";import"./DropdownField-DwHIJNgc.js";import"./withOsdkMetrics-D9G2IFka.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
