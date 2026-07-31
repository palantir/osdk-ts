import{j as i}from"./iframe-iYC6vAB_.js";import{O as p}from"./object-table-B7XVPyF5.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BJJlcPP2.js";import"./preload-helper-Br5mua1v.js";import"./Table-rO63C4On.js";import"./index-DpOo1606.js";import"./Dialog-DW6s5zNf.js";import"./cross-BrbS3Icp.js";import"./svgIconContainer-D-ZasT0L.js";import"./useBaseUiId-B9eyS0D0.js";import"./InternalBackdrop-7PMuJeV1.js";import"./composite-v77FsArx.js";import"./index-QX0Uv_MK.js";import"./index-Dz2p1JfI.js";import"./index-DWu-8pfX.js";import"./useEventCallback-BGSAbgMA.js";import"./SkeletonBar-Ct_r8P3y.js";import"./LoadingCell-CizPVaWx.js";import"./ColumnConfigDialog-BVvYjqpJ.js";import"./DraggableList-BgljoLpl.js";import"./search-BDtw4QLY.js";import"./Input-BWavTvGX.js";import"./useControlled-C6rc4bi8.js";import"./isEqual-BvnyoED8.js";import"./isObject-DsmXICAg.js";import"./Button-CYu6aPyK.js";import"./ActionButton-XdMdSvPG.js";import"./Checkbox-ChuAqLvm.js";import"./useValueChanged-DBkFN2BU.js";import"./CollapsiblePanel-CoFoYim3.js";import"./MultiColumnSortDialog-DEkKEvGx.js";import"./MenuTrigger-CCgnUVbi.js";import"./CompositeItem-BMBEvSZ_.js";import"./ToolbarRootContext-DM4XCCSQ.js";import"./getDisabledMountTransitionStyles-BbjC2268.js";import"./getPseudoElementBounds-BDlA4Lv9.js";import"./chevron-down-BGy8KVlz.js";import"./index-_Y1lHNIx.js";import"./error-D4wx1m5V.js";import"./BaseCbacBanner-KGPFmWJj.js";import"./makeExternalStore-Ci4r-VA-.js";import"./Tooltip-DC0-jila.js";import"./PopoverPopup-DPOgv1BI.js";import"./toNumber-CGIbY5q9.js";import"./useOsdkClient-KtJ7es4q.js";import"./tick-qPYquHw-.js";import"./DropdownField-BQ1K9Kux.js";import"./withOsdkMetrics-qijyDy6X.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
