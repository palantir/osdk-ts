import{j as i}from"./iframe-D0BcpvbQ.js";import{O as p}from"./object-table-PqC7FE-O.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-PkksVNwx.js";import"./preload-helper-25-JBzXD.js";import"./Table-BEsaXFi1.js";import"./index-J-5LjNrj.js";import"./Dialog-vNOQWlw1.js";import"./cross-CjHwEj-1.js";import"./svgIconContainer-C3Yfvyd2.js";import"./useBaseUiId-DKDRPBwJ.js";import"./InternalBackdrop-DYHVppNb.js";import"./composite-oTuSysNj.js";import"./index-DnyQlPpk.js";import"./index-Boycosi1.js";import"./index-DZk3VDH-.js";import"./useEventCallback-CFJPyiwb.js";import"./SkeletonBar-By0yALek.js";import"./LoadingCell-Bax77anx.js";import"./ColumnConfigDialog-BHuWFt8t.js";import"./DraggableList-6e2N0cSH.js";import"./search-CSQzmj9y.js";import"./Input-CmqnqFxK.js";import"./useControlled-2QWb7bZB.js";import"./Button-X3pcCJxf.js";import"./small-cross-qu8LZoy6.js";import"./ActionButton-Do_ZLaI6.js";import"./Checkbox-DsaK4CC-.js";import"./useValueChanged-Da2WPzqs.js";import"./CollapsiblePanel-DUiPkmDM.js";import"./MultiColumnSortDialog-BKzxXvjt.js";import"./MenuTrigger-DmSEvktb.js";import"./CompositeItem-CKKkXKKr.js";import"./ToolbarRootContext-4_oBwQs6.js";import"./getDisabledMountTransitionStyles-BmtzZkd7.js";import"./getPseudoElementBounds-CLq8MpBn.js";import"./chevron-down-WrvVs3Y7.js";import"./index-Ujvos5Bu.js";import"./error-BGGXhU_S.js";import"./BaseCbacBanner-Bwe36--Z.js";import"./makeExternalStore-NS27kiyv.js";import"./Tooltip-h5iXzAIl.js";import"./PopoverPopup-BZJMElBM.js";import"./debounce-C4dGlWDp.js";import"./useOsdkClient-D3fIC1F8.js";import"./tick-DXX_EiYG.js";import"./DropdownField-CUMisXrx.js";import"./isEqual-DkQgEU8T.js";import"./withOsdkMetrics-DmAggtUS.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
