import{j as i}from"./iframe-DJmldxve.js";import{O as p}from"./object-table-Cdj1OBo_.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-kVRxwvh0.js";import"./preload-helper-CfPw7BaZ.js";import"./Table-DLbCkB-8.js";import"./index-DD-0dH-p.js";import"./Dialog-d2jWPSNx.js";import"./cross-DmQC9xrL.js";import"./svgIconContainer-P7eEWIUa.js";import"./useBaseUiId-B4pZBY6q.js";import"./InternalBackdrop-CBiQ-iZm.js";import"./composite-CSkjak5h.js";import"./index-lnBxI4J8.js";import"./index-BGy7kKJa.js";import"./index-DHzhHmTz.js";import"./useEventCallback-CBIwa4BF.js";import"./SkeletonBar-B9qAZ7dG.js";import"./LoadingCell-CXGAa_W2.js";import"./ColumnConfigDialog-nF8osFOq.js";import"./DraggableList-BDi3Xc8h.js";import"./search-BDoaiW25.js";import"./Input-DVHmkR4v.js";import"./useControlled-CkquFaFo.js";import"./Button-DseRSSUk.js";import"./small-cross-DLY7Hev3.js";import"./ActionButton-BpeAPNCc.js";import"./Checkbox-DsAo_Msx.js";import"./useValueChanged-D4YcGJ5P.js";import"./CollapsiblePanel-Bi0MtyT6.js";import"./MultiColumnSortDialog-BC3vwMSc.js";import"./MenuTrigger-BIZPL6dI.js";import"./CompositeItem-DHs6pqwB.js";import"./ToolbarRootContext-QKXaQ_-N.js";import"./getDisabledMountTransitionStyles-Dp3LgcOf.js";import"./getPseudoElementBounds-CZjHe1bQ.js";import"./chevron-down-FLohmcIo.js";import"./index-CNroXRNE.js";import"./error-7UB6xqMv.js";import"./BaseCbacBanner-BiJ6rg8v.js";import"./makeExternalStore-D_byBCsj.js";import"./Tooltip-BnjrHWIU.js";import"./PopoverPopup-BUpDQbiA.js";import"./debounce-B2j6j5iZ.js";import"./useOsdkClient-UObDw9yg.js";import"./tick-CGvAH9hc.js";import"./DropdownField-CfZbuNVk.js";import"./isEqual-CCtCZxsR.js";import"./withOsdkMetrics-ChD8F_9J.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
