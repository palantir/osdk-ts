import{j as i}from"./iframe-KleQ2Wf3.js";import{O as p}from"./object-table-Bx8oOL2G.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-VjVGIHiW.js";import"./preload-helper-7Uf-e0eF.js";import"./Table-hcn36HGs.js";import"./index-BJGsi2ln.js";import"./Dialog-Dp-GkQmB.js";import"./cross-dN9-xF_6.js";import"./svgIconContainer-BRTcYuz-.js";import"./useBaseUiId-au1tBZKr.js";import"./InternalBackdrop-CxSD8Cp2.js";import"./composite-DXCTc0LD.js";import"./index-CqzN1gLv.js";import"./index-5raUfGTA.js";import"./index-5W9kt8-3.js";import"./useEventCallback-DCx7Asvu.js";import"./SkeletonBar-BP_ZKoCI.js";import"./LoadingCell-BXlsInkE.js";import"./ColumnConfigDialog-DmRYufux.js";import"./DraggableList-Cfdg10M-.js";import"./search-DGONQjtR.js";import"./Input-DYtYd9SI.js";import"./useControlled-C5WbbxG6.js";import"./Button-HfVvjBaX.js";import"./small-cross-DUBOsE9B.js";import"./ActionButton-CqPXhUsj.js";import"./Checkbox-bJToUmmm.js";import"./useValueChanged-BgChR_tQ.js";import"./CollapsiblePanel-knqe2lyk.js";import"./MultiColumnSortDialog-CiEpuWMX.js";import"./MenuTrigger-BoSDKcem.js";import"./CompositeItem-CQkoTI-y.js";import"./ToolbarRootContext-o5mBsyGt.js";import"./getDisabledMountTransitionStyles-BGkmtecQ.js";import"./getPseudoElementBounds-CHfh_GUi.js";import"./chevron-down-jigIVwbX.js";import"./index-C028rklK.js";import"./error-C4IozNy9.js";import"./BaseCbacBanner-BRyFvx0Z.js";import"./makeExternalStore-CdYrFgJd.js";import"./Tooltip-D9lRyGCh.js";import"./PopoverPopup-Bt84O_KM.js";import"./debounce-CQ4liA-9.js";import"./useOsdkClient-CRK30zOr.js";import"./tick-DywDZCoT.js";import"./DropdownField-gq5cNdSx.js";import"./isEqual-DZH5xjV7.js";import"./withOsdkMetrics-_1QqcoW6.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
