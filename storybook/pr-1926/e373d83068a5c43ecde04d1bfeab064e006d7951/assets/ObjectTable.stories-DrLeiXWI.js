import{j as i}from"./iframe-0Iz5vwcT.js";import{O as p}from"./object-table-DKWAT-Fj.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-EHBYiR5h.js";import"./preload-helper-DPuYeI1F.js";import"./Table-DQnxVUz9.js";import"./index-CwqL2BSp.js";import"./Dialog-zoM-tL9f.js";import"./cross-zS2Wnz2V.js";import"./svgIconContainer--rVYZd1H.js";import"./useBaseUiId-BzcgVOgr.js";import"./InternalBackdrop-CIp9NUV4.js";import"./composite-N0Lz-u2v.js";import"./index-Fpqw52jH.js";import"./index-CJbD8PH4.js";import"./index-BZki0KLB.js";import"./useEventCallback-OZngxyt9.js";import"./SkeletonBar-B5YslJhy.js";import"./LoadingCell-P7TCSaZN.js";import"./ColumnConfigDialog-4xk1CJcu.js";import"./DraggableList-DWCTZj5F.js";import"./search-C60pdPoy.js";import"./Input-CxV_aY0Y.js";import"./useControlled-BgJ32gqU.js";import"./Button-DmPkGrX2.js";import"./small-cross-CVGlFgTv.js";import"./ActionButton-C5FOmGzz.js";import"./Checkbox-DsJE1lPn.js";import"./useValueChanged-C8jXi1Db.js";import"./CollapsiblePanel-BCIeAMta.js";import"./MultiColumnSortDialog-DGCz0v4U.js";import"./MenuTrigger-DTlZrVLo.js";import"./CompositeItem-DmRUbVI5.js";import"./ToolbarRootContext-C3DWskzf.js";import"./getDisabledMountTransitionStyles-Cx-ixMqU.js";import"./getPseudoElementBounds-BUv5HBAP.js";import"./chevron-down-BAJ5mZyN.js";import"./index-Cl9Abjho.js";import"./error-D9h6iLxx.js";import"./BaseCbacBanner-CQg0ZUIR.js";import"./makeExternalStore-CFnbMMz3.js";import"./Tooltip-BVWIJEtT.js";import"./PopoverPopup-CowTNg7A.js";import"./debounce-B18_zKUH.js";import"./useOsdkClient-BuNKTI6L.js";import"./tick-Jp1l8F3U.js";import"./DropdownField-DFrco9Qo.js";import"./isEqual-DzmNlRkK.js";import"./withOsdkMetrics-kzWOWE3o.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
