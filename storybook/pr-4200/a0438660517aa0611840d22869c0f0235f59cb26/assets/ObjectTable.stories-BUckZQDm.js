import{j as i}from"./iframe-DmE1XkBG.js";import{O as p}from"./object-table-BBDX0JK-.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C0KsnQRI.js";import"./preload-helper-CXlVQXKb.js";import"./Table-3USI4T48.js";import"./index-kStVVneq.js";import"./Dialog-U7sno35Q.js";import"./cross-DJt4HA-N.js";import"./svgIconContainer-BYLHbmus.js";import"./useBaseUiId-BBFoTCwh.js";import"./InternalBackdrop-CiHjM1hr.js";import"./composite-Dj1kIl2K.js";import"./index-ks1cIWqU.js";import"./index-DXBXi0eZ.js";import"./index-BSV59ZpO.js";import"./useEventCallback-vgEMvYMu.js";import"./SkeletonBar-CEiG_Olh.js";import"./LoadingCell-DDr20pG6.js";import"./ColumnConfigDialog-Ce0P5zkg.js";import"./DraggableList-IbXSuFDv.js";import"./search-DLAneuKN.js";import"./Input-BwNWBTCC.js";import"./useControlled-Ceu9BId1.js";import"./Button-CjFhiXn4.js";import"./small-cross-CdTrWr6f.js";import"./ActionButton-D7gNEyrg.js";import"./Checkbox-BS40cc6q.js";import"./useValueChanged-CEMHgm4B.js";import"./CollapsiblePanel-F_JsFxPB.js";import"./MultiColumnSortDialog-DljV5krj.js";import"./MenuTrigger-_nCOMuwK.js";import"./CompositeItem-C3J_zDNM.js";import"./ToolbarRootContext-CmqDJjBa.js";import"./getDisabledMountTransitionStyles-C0PIglyQ.js";import"./getPseudoElementBounds-BdUsSKfU.js";import"./chevron-down-Dg6DJkU-.js";import"./index-BVlwO6Du.js";import"./error-B3TY1Brr.js";import"./BaseCbacBanner-7AxfkGHq.js";import"./makeExternalStore-C84QYiDy.js";import"./Tooltip-Bn2W5oJX.js";import"./PopoverPopup-D4DXdieW.js";import"./debounce-DVfO0w3J.js";import"./useOsdkClient-COMtbyLT.js";import"./tick-BV927XEn.js";import"./DropdownField-DYMCaG07.js";import"./isEqual-WGLF_XWC.js";import"./withOsdkMetrics-DXKPSTbY.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
