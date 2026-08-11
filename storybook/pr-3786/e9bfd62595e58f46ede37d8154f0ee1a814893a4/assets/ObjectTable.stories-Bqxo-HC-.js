import{j as i}from"./iframe-YvYOR2wq.js";import{O as p}from"./object-table-DFp50YJS.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DVMstBDK.js";import"./preload-helper-CzbLUeKx.js";import"./Table-DgmuGDrA.js";import"./index-Dg2Ua59f.js";import"./Dialog-BOksrRjX.js";import"./cross-DN6PKsRx.js";import"./svgIconContainer-BkbpeeEh.js";import"./useBaseUiId-DIa8CEVr.js";import"./InternalBackdrop-C1_8LOV1.js";import"./composite-BRTo3g9o.js";import"./index-w--EL4PT.js";import"./index-DS0htV8G.js";import"./index-Coel4Jgz.js";import"./useEventCallback-C3JYfwwo.js";import"./SkeletonBar-CMZ34MM-.js";import"./LoadingCell-DRNmp-08.js";import"./ColumnConfigDialog-YczIbXzh.js";import"./DraggableList-kcEMvLS0.js";import"./search-C6slhSf_.js";import"./Input-Au_NktxX.js";import"./useControlled-BaKiUohk.js";import"./isEqual-BT4XKmjn.js";import"./isObject-CGKerAkV.js";import"./Button-yaRm4n4E.js";import"./ActionButton-D3qEnWxR.js";import"./Checkbox-C7KgpzBK.js";import"./useValueChanged-BzhpnMSP.js";import"./CollapsiblePanel-DIz_ZpXy.js";import"./MultiColumnSortDialog-DC7hRVhI.js";import"./MenuTrigger-kYteRUU6.js";import"./CompositeItem-Tos5QYfq.js";import"./ToolbarRootContext-DvVNq82_.js";import"./getDisabledMountTransitionStyles-Bt7RtkHz.js";import"./getPseudoElementBounds-DEObypw2.js";import"./chevron-down-DjeSf-LC.js";import"./index-tjquBYxZ.js";import"./error-BN9FB_kM.js";import"./BaseCbacBanner-pHLTCldx.js";import"./makeExternalStore-Bf2AXbqX.js";import"./Tooltip-DBvEwoA0.js";import"./PopoverPopup-C4rnnz4U.js";import"./toNumber-BlqZmOuH.js";import"./useOsdkClient-DpDEjnV-.js";import"./tick-Df1dDSk-.js";import"./DropdownField-Bty5TdGt.js";import"./withOsdkMetrics-BC7VO-wU.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
