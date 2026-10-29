import{j as i}from"./iframe-B4MgyMWl.js";import{O as p}from"./object-table-DH_X6CMQ.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Z8bvBpC9.js";import"./preload-helper-BUOdkVYn.js";import"./Table-DzrzPrUN.js";import"./index-CWrwK-HJ.js";import"./Dialog-CDzhEmLD.js";import"./cross-DeZ5LgCs.js";import"./svgIconContainer-DSK9BMKz.js";import"./useBaseUiId-cePy-Fka.js";import"./InternalBackdrop-DCdVc_fO.js";import"./composite-CAyP_TTE.js";import"./index-fmJhNd3L.js";import"./index-CyhRYA9d.js";import"./index-DqbVp-Pn.js";import"./useEventCallback-D3NXkfC-.js";import"./SkeletonBar-cG_KH1yq.js";import"./LoadingCell-BjBvMitl.js";import"./ColumnConfigDialog-CQQCXpXv.js";import"./DraggableList-D4-pid7-.js";import"./search-DD9Ps7Xi.js";import"./Input-DyGREfir.js";import"./useControlled-CqJ99-8o.js";import"./Button-CpaCdx-9.js";import"./small-cross-DDNekb4S.js";import"./ActionButton-C6ToF_1u.js";import"./Checkbox-gRAq5P8_.js";import"./useValueChanged-Dv5oraiV.js";import"./CollapsiblePanel-ECfDnot5.js";import"./MultiColumnSortDialog-Bsdkp2ea.js";import"./MenuTrigger-BHmlE0S3.js";import"./CompositeItem-Brr5mEPn.js";import"./ToolbarRootContext-BOMUT60A.js";import"./getDisabledMountTransitionStyles-CXsfR7z_.js";import"./getPseudoElementBounds-DxzYEc8w.js";import"./chevron-down-ie3vWH8s.js";import"./index-iqc6oGJg.js";import"./error-6geuwXkd.js";import"./BaseCbacBanner-ncoZ0sEj.js";import"./makeExternalStore-DUbcYQez.js";import"./Tooltip-D9C0Qo0s.js";import"./PopoverPopup-Cokuf9G4.js";import"./debounce-CCX8N0To.js";import"./useOsdkClient-D1uuFUvl.js";import"./tick-xz3SeBYf.js";import"./DropdownField-ksl0RW3R.js";import"./isEqual-Bqyg8bbd.js";import"./withOsdkMetrics-DM07Q-qZ.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
