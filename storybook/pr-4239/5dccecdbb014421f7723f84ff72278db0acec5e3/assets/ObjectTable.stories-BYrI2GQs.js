import{j as i}from"./iframe-DTW0zbJg.js";import{O as p}from"./object-table-BEpCdqlB.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Bd0Ur1IU.js";import"./preload-helper-CHqtrcoH.js";import"./Table-CAZxm3nQ.js";import"./index-C19Cbd9w.js";import"./Dialog-DkpQneLX.js";import"./cross-DUPbOXnx.js";import"./svgIconContainer-C_NUwc74.js";import"./useBaseUiId-pXEfVnMq.js";import"./InternalBackdrop-4VqQwQv1.js";import"./composite-Ch_TQxW6.js";import"./index-Dd12A0b5.js";import"./index-BNxdJsoF.js";import"./index-5qBmfdlD.js";import"./useEventCallback-cQNzf77G.js";import"./SkeletonBar-CDOQsslB.js";import"./LoadingCell-BR7Clm_q.js";import"./ColumnConfigDialog-BFrZlNI3.js";import"./DraggableList-BsjIts7t.js";import"./search-DeSIHMGj.js";import"./Input-9Y-Iasoe.js";import"./useControlled-B9BNpkGu.js";import"./Button-Bl_fb9NZ.js";import"./small-cross-Bf21DHmz.js";import"./ActionButton-BmVlmB5r.js";import"./Checkbox-DJWeAXt-.js";import"./useValueChanged-Cbl0UOUH.js";import"./CollapsiblePanel-Cd-HUXxd.js";import"./MultiColumnSortDialog-CrE6Md6y.js";import"./MenuTrigger-DFscXaTL.js";import"./CompositeItem-B8f4EvZj.js";import"./ToolbarRootContext-D1Ryhi91.js";import"./getDisabledMountTransitionStyles-BbG3pxx_.js";import"./getPseudoElementBounds-9ob2YQd8.js";import"./chevron-down-B_r9FktR.js";import"./index-DwQpT-YG.js";import"./error-DehDfWea.js";import"./BaseCbacBanner-CSmyF8Eg.js";import"./makeExternalStore-Cd_b6BPY.js";import"./Tooltip-zKVmMRSO.js";import"./PopoverPopup-BhSRrebE.js";import"./debounce-AmCXqNPb.js";import"./useOsdkClient-BE_aYXwA.js";import"./tick-CoEPOCTW.js";import"./DropdownField-BUpFr6O7.js";import"./isEqual-BwJgMRCR.js";import"./withOsdkMetrics-BhopaHNu.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
