import{j as i}from"./iframe-BBEE1fcd.js";import{O as p}from"./object-table-CizW9k1k.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CFdIVroP.js";import"./preload-helper-BxA6CJ-D.js";import"./Table-Cpsh9vSd.js";import"./index-BD-kAubo.js";import"./Dialog-ej2bxdDy.js";import"./cross-Di1f7Jtb.js";import"./svgIconContainer-CXhq7QF6.js";import"./useBaseUiId-DA_UWaVl.js";import"./InternalBackdrop-DcwfHm6T.js";import"./composite-aN5etqXc.js";import"./index-CqSSuO0g.js";import"./index-BgH3bF5f.js";import"./index-D_x-kXlz.js";import"./useEventCallback-DllGfArL.js";import"./SkeletonBar-0dsrYZxO.js";import"./LoadingCell-BH3B3g3p.js";import"./ColumnConfigDialog-B8QRS1ap.js";import"./DraggableList-CiRBEWSA.js";import"./search-CRkLehCt.js";import"./Input-DxM0pKmj.js";import"./useControlled-B-EIx2lA.js";import"./isEqual-B6nI0qZj.js";import"./isObject-DqDSXA2A.js";import"./Button-NXakGZes.js";import"./ActionButton-c4QHUsT7.js";import"./Checkbox-dobUxrMZ.js";import"./useValueChanged-DDjVOmRV.js";import"./CollapsiblePanel-QEwDQib-.js";import"./MultiColumnSortDialog-DZNl0gFJ.js";import"./MenuTrigger-DFOSWFfa.js";import"./CompositeItem-56QVPZAb.js";import"./ToolbarRootContext-BMnS3VWT.js";import"./getDisabledMountTransitionStyles-W-FCQJty.js";import"./getPseudoElementBounds-BOSpUzeO.js";import"./chevron-down-By7dAtgj.js";import"./index-Dj26UzNn.js";import"./error-rupeo4en.js";import"./BaseCbacBanner-CCtFuv6w.js";import"./makeExternalStore-DcP_Mz2E.js";import"./Tooltip-Phla1AWu.js";import"./PopoverPopup-CsmvOzIb.js";import"./toNumber-DGMU6B_l.js";import"./useOsdkClient-D2UUcxHQ.js";import"./tick-D-5cHhdL.js";import"./DropdownField-BsqxfHny.js";import"./withOsdkMetrics-BNDO0u89.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
