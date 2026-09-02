import{j as i}from"./iframe-2o2kyJSw.js";import{O as p}from"./object-table-azDEgYl1.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DsSJCard.js";import"./preload-helper-CiJwpqMw.js";import"./Table-CmFdThQv.js";import"./index-CitRnrnM.js";import"./Dialog-BBfLfR--.js";import"./cross-B_lTfXfQ.js";import"./svgIconContainer-CuK8KMCF.js";import"./useBaseUiId-CpKlAOSJ.js";import"./InternalBackdrop-BikInMxN.js";import"./composite-BjSIx71V.js";import"./index-2rHOwy8w.js";import"./index-CiEsaZes.js";import"./index-DXtnwcW_.js";import"./useEventCallback-C5UTCvLQ.js";import"./SkeletonBar-DGXXhlfa.js";import"./LoadingCell-C2GrCxA_.js";import"./ColumnConfigDialog-CsuV_WmL.js";import"./DraggableList-DraN2KjT.js";import"./search-BjDFLGmu.js";import"./Input-DYGxrYIz.js";import"./useControlled-BXgT251S.js";import"./Button-BNZyyCXs.js";import"./small-cross-BjWdTVSE.js";import"./ActionButton-C6ImwtAS.js";import"./Checkbox-Dgyqqw4w.js";import"./useValueChanged-CBr85hPL.js";import"./CollapsiblePanel-B3UwMjFD.js";import"./MultiColumnSortDialog-3J1w479l.js";import"./MenuTrigger-DO2xD1uK.js";import"./CompositeItem-CeKYfb90.js";import"./ToolbarRootContext-VK9eZ2Nh.js";import"./getDisabledMountTransitionStyles-BI6VDTRC.js";import"./getPseudoElementBounds-e4sYnubV.js";import"./chevron-down-DzSskaX4.js";import"./index--X-EHlCl.js";import"./error-B6s9JUe9.js";import"./BaseCbacBanner-stKdaGYj.js";import"./makeExternalStore-D2otK5Vr.js";import"./Tooltip-CIdYWoah.js";import"./PopoverPopup-TKZ7g6pB.js";import"./debounce-BFnvX-XD.js";import"./useOsdkClient-BuSNta0K.js";import"./tick-_kgMfq2D.js";import"./DropdownField-C_tiYhOd.js";import"./isEqual-DepNuDvP.js";import"./withOsdkMetrics-BmpmfXN7.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
