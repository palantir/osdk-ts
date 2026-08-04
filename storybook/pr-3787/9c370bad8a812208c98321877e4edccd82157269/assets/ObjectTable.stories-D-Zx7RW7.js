import{j as i}from"./iframe-B28z8hIY.js";import{O as p}from"./object-table-DuX6yprJ.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-cDy1jtu_.js";import"./preload-helper-D8qOl9Xf.js";import"./Table-CkDfUUL2.js";import"./index-DMpY9C2v.js";import"./Dialog-Bp7hHvol.js";import"./cross-CDkShHPW.js";import"./svgIconContainer-Dhm8X-BV.js";import"./useBaseUiId-DM58hJy6.js";import"./InternalBackdrop-CeDlVTrh.js";import"./composite-DNMsan99.js";import"./index-djAwGKCo.js";import"./index-Bq3ZgDfN.js";import"./index-BlVCSLA8.js";import"./useEventCallback-DrAp6rDo.js";import"./SkeletonBar-DXYlcYZk.js";import"./LoadingCell-Djdd6Yw8.js";import"./ColumnConfigDialog-D9VX9ial.js";import"./DraggableList-CMVFvtRa.js";import"./search-CmPRdAAA.js";import"./Input-DcxMr_KP.js";import"./useControlled-ss5L4whE.js";import"./isEqual-CO9g_nbd.js";import"./isObject-DSQXr_fO.js";import"./Button-uH6gdAsd.js";import"./ActionButton-D748JeaI.js";import"./Checkbox-C6RfZG6k.js";import"./useValueChanged-tTHj3kBw.js";import"./CollapsiblePanel-BQoexJm7.js";import"./MultiColumnSortDialog-Bnz8XLD9.js";import"./MenuTrigger-BmcDv0Yc.js";import"./CompositeItem-Bq1q5tVI.js";import"./ToolbarRootContext-D22XPhTr.js";import"./getDisabledMountTransitionStyles-B48XXR4D.js";import"./getPseudoElementBounds-MzI8NVer.js";import"./chevron-down-D_GWy34J.js";import"./index-BZgkCUQe.js";import"./error-CObZLwnt.js";import"./BaseCbacBanner-D7jyfgJe.js";import"./makeExternalStore-Dcx7-1vD.js";import"./Tooltip-DdCN7MaI.js";import"./PopoverPopup-D6bOInCn.js";import"./toNumber-CS-3Wsgc.js";import"./useOsdkClient-CV7QSUV2.js";import"./tick-DSR81z-h.js";import"./DropdownField-CUOugPeD.js";import"./withOsdkMetrics-GTEGqRPt.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
