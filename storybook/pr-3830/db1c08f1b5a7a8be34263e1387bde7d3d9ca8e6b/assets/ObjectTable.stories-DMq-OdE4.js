import{j as i}from"./iframe-BRm4vCFN.js";import{O as p}from"./object-table-D8m4l83f.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-HRy2qOlZ.js";import"./preload-helper-B8qSzsyn.js";import"./Table-CaY8BvM5.js";import"./index-B7ENbfBC.js";import"./Dialog-btN0iOgg.js";import"./cross-DPDrF0U4.js";import"./svgIconContainer-OFMjb_Rs.js";import"./useBaseUiId-B7fRGxsO.js";import"./InternalBackdrop-BaGiZk1Y.js";import"./composite-wKCobVJO.js";import"./index-CnpvZLeY.js";import"./index-CpqlfQCh.js";import"./index-CWfM76cW.js";import"./useEventCallback-JHTQureV.js";import"./SkeletonBar-C6qn1HDI.js";import"./LoadingCell-Djw5Rm1L.js";import"./ColumnConfigDialog-DxbEr4NX.js";import"./DraggableList-I3NGg1TF.js";import"./search-ntbcNAhn.js";import"./Input-BpwNJM-I.js";import"./useControlled-CEOSMcVQ.js";import"./isEqual-C63Qhdu7.js";import"./isObject-CrHRd0xf.js";import"./Button-Bb-87jsh.js";import"./ActionButton-DD0zQbbI.js";import"./Checkbox-Dh5u6bQZ.js";import"./useValueChanged--EnHqbhq.js";import"./CollapsiblePanel-DWM-Z1Ph.js";import"./MultiColumnSortDialog-Bpnx2HZs.js";import"./MenuTrigger-BrBHYI-t.js";import"./CompositeItem-BNvDCPgA.js";import"./ToolbarRootContext-D1wgTrKR.js";import"./getDisabledMountTransitionStyles-D1IPv3z8.js";import"./getPseudoElementBounds-A6c4Mra_.js";import"./chevron-down-Cm7ysla1.js";import"./index-rovaKXjR.js";import"./error-BSqFGqFy.js";import"./BaseCbacBanner-CGSGQvZ8.js";import"./makeExternalStore-BzfExdb1.js";import"./Tooltip-CohfXHDn.js";import"./PopoverPopup-BggDBR68.js";import"./toNumber-DHFLqzDS.js";import"./useOsdkClient-BDarQYfA.js";import"./tick-bUP2FK1I.js";import"./DropdownField-Dgc_bssU.js";import"./withOsdkMetrics-B9Su6DFN.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
