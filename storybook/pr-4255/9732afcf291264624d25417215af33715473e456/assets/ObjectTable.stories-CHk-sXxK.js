import{j as i}from"./iframe-D6y6_Ifg.js";import{O as p}from"./object-table-nYNJPeZT.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-qjOdQ9Xn.js";import"./preload-helper-DyU-boOC.js";import"./Table-D-Yj8yjp.js";import"./index-BGSHUEgZ.js";import"./Dialog-DDgjwDi0.js";import"./cross-DjwwagZM.js";import"./svgIconContainer-kSsZGyO3.js";import"./useBaseUiId-BqYaQHeS.js";import"./InternalBackdrop-Ddo5KuLP.js";import"./composite-DjaGlwPS.js";import"./index-DCLjYuV8.js";import"./index-BgYri-U-.js";import"./index-C3VTJ_3W.js";import"./useEventCallback-Ctt9oFuA.js";import"./SkeletonBar-CDnWHSD6.js";import"./LoadingCell-5nVC5W90.js";import"./ColumnConfigDialog-DhSn3u3u.js";import"./DraggableList-C0L-xZto.js";import"./search-Ds3QYjxm.js";import"./Input-yKev__cZ.js";import"./useControlled-BqujvQcb.js";import"./Button-CWXM-Cv5.js";import"./small-cross-BJjPBosz.js";import"./ActionButton-Drswk3OR.js";import"./Checkbox-Cj9nTQ8T.js";import"./useValueChanged-DgtVOjIu.js";import"./CollapsiblePanel-Cz_Uq3Uc.js";import"./MultiColumnSortDialog-D1J5klGK.js";import"./MenuTrigger-Cmsog5T9.js";import"./CompositeItem-DO83W1mC.js";import"./ToolbarRootContext-CGSlDNd6.js";import"./getDisabledMountTransitionStyles-uDupN6Zi.js";import"./getPseudoElementBounds-BpTbd1eR.js";import"./chevron-down-tZEFHgnG.js";import"./index-qwFFssEr.js";import"./error-kgzj6SX8.js";import"./BaseCbacBanner-BeXsIPJi.js";import"./makeExternalStore-ITPdtG8P.js";import"./Tooltip-CiApLGcm.js";import"./PopoverPopup-GQEpG8wD.js";import"./debounce-CShglMk9.js";import"./useOsdkClient-CSuFL6LS.js";import"./tick-3tfAK9_o.js";import"./DropdownField-B-Y7S6ow.js";import"./isEqual-lwrbts4r.js";import"./withOsdkMetrics-DLWDjTSp.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
