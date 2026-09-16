import{j as i}from"./iframe-EpH4H8Ct.js";import{O as p}from"./object-table-DWYlyXh4.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-znwTcq0m.js";import"./preload-helper-AInD9Bcq.js";import"./Table-COuN_wlR.js";import"./index-6wkuS9kk.js";import"./Dialog-1NHwSkrj.js";import"./cross-Bw1kg8R1.js";import"./svgIconContainer-BEULmRQq.js";import"./useBaseUiId-B53jZkpD.js";import"./InternalBackdrop-BVHPaONx.js";import"./composite-CXo_dnRM.js";import"./index-Dy-Nc8BB.js";import"./index-5GEbdtwp.js";import"./index-BQgIKsZn.js";import"./useEventCallback-DNP1HUKE.js";import"./SkeletonBar-Cwoxu6yL.js";import"./LoadingCell-CfUzZulW.js";import"./ColumnConfigDialog-CyRYuEAz.js";import"./DraggableList-CXgZh0ko.js";import"./search-Bdehc4Bq.js";import"./Input-DNhi3I7C.js";import"./useControlled-D6NLbg_O.js";import"./Button-BXHz7yPF.js";import"./small-cross--Yq5_IWh.js";import"./ActionButton-BG7PpZze.js";import"./Checkbox-N8sASeun.js";import"./useValueChanged-CdM5uEF8.js";import"./CollapsiblePanel-lqnKFpJk.js";import"./MultiColumnSortDialog-DLqVf03q.js";import"./MenuTrigger-CX9dMlco.js";import"./CompositeItem-DzD_vpNX.js";import"./ToolbarRootContext-BhZagEjX.js";import"./getDisabledMountTransitionStyles-Vp1URACM.js";import"./getPseudoElementBounds-C0OS-1z6.js";import"./chevron-down-B3Hf5n4h.js";import"./index-Dva8VjAa.js";import"./error-CwB_EWnJ.js";import"./BaseCbacBanner-CPNKIQw_.js";import"./makeExternalStore-BOo8e2Do.js";import"./Tooltip-DZvrsB4L.js";import"./PopoverPopup-AU4um7RM.js";import"./debounce-PtscUFWK.js";import"./useOsdkClient-Df-lYPH1.js";import"./tick-BpAUUczH.js";import"./DropdownField-DQrZT-V6.js";import"./isEqual-DQIzKkQH.js";import"./withOsdkMetrics-Cj7SQvcU.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
