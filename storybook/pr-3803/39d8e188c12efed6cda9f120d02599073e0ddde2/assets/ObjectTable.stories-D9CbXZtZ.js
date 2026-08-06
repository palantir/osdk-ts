import{j as i}from"./iframe-DiX2626k.js";import{O as p}from"./object-table-D3gr3Mpc.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B4aG4PaC.js";import"./preload-helper-CgOT8OGd.js";import"./Table-DtbOZWAd.js";import"./index-C_a3B7P8.js";import"./Dialog-D_br3pPB.js";import"./cross-ChthWFmt.js";import"./svgIconContainer-BHXjiRCE.js";import"./useBaseUiId-Dw9BhH-r.js";import"./InternalBackdrop-cTMtjssL.js";import"./composite-BiL7kwGo.js";import"./index-BU1sDqZl.js";import"./index-BN-4XXfM.js";import"./index-DPWlnP4D.js";import"./useEventCallback-CA_JVHJ1.js";import"./SkeletonBar-DSeMrJwC.js";import"./LoadingCell-Bh3S_WfL.js";import"./ColumnConfigDialog-CJtUG27g.js";import"./DraggableList-CZ1MIVA8.js";import"./search-Ch6GmwTu.js";import"./Input-0BqYVGVX.js";import"./useControlled-CxjPKzUJ.js";import"./isEqual-DEKGYxXe.js";import"./isObject-CXcvN3kl.js";import"./Button-DcxIJd10.js";import"./ActionButton-zWukBAep.js";import"./Checkbox-BXFMQuBS.js";import"./useValueChanged-BN-eh1-G.js";import"./CollapsiblePanel-CfY2wZ25.js";import"./MultiColumnSortDialog-CGkw4JOQ.js";import"./MenuTrigger-th41DMhC.js";import"./CompositeItem-ZBpRCkxX.js";import"./ToolbarRootContext-DHdMmgSm.js";import"./getDisabledMountTransitionStyles-DLljnWq6.js";import"./getPseudoElementBounds-BnlTiciN.js";import"./chevron-down-BU7zIy-t.js";import"./index-q-Uvoyav.js";import"./error-BCYvkDQZ.js";import"./BaseCbacBanner-BjACYSVj.js";import"./makeExternalStore-BnR4KHg7.js";import"./Tooltip-BiefMEZh.js";import"./PopoverPopup-B1Yhtsuj.js";import"./toNumber-iY1WLnn2.js";import"./useOsdkClient-5SwITSvW.js";import"./tick-BXKWEd6P.js";import"./DropdownField-7lSUVTV7.js";import"./withOsdkMetrics-D26ty9CF.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
