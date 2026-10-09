import{j as i}from"./iframe-Cul2E1vG.js";import{O as p}from"./object-table-CIO2ioDr.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-3qavP2eu.js";import"./preload-helper--6M4Khrx.js";import"./Table-Bum8c-iM.js";import"./index-Bn5VDq5b.js";import"./Dialog-DlflpEpN.js";import"./cross-C6zh1HjN.js";import"./svgIconContainer-mVJAcMp8.js";import"./useBaseUiId-BQIQ8jck.js";import"./InternalBackdrop-m5F5-2dG.js";import"./composite-SNvyYtRl.js";import"./index-cnCRVpDv.js";import"./index-B39_Zfhs.js";import"./index-BgP6GmOx.js";import"./useEventCallback-DWZk488X.js";import"./SkeletonBar-XecFs5pz.js";import"./LoadingCell-TNVaOATH.js";import"./ColumnConfigDialog-DOH9iw-n.js";import"./DraggableList-CHj5NpTN.js";import"./search-BwSeGY7Y.js";import"./Input-DRePQ-W6.js";import"./useControlled-CzFr7QRD.js";import"./Button-oDRXfShn.js";import"./small-cross-DLuZoUhq.js";import"./ActionButton-BcIcAh2z.js";import"./Checkbox-DVjhvMN4.js";import"./useValueChanged-B-W2cV9q.js";import"./CollapsiblePanel-BalN1idY.js";import"./MultiColumnSortDialog-CFEpc927.js";import"./MenuTrigger-KvGWfiFl.js";import"./CompositeItem-CvRXWH1T.js";import"./ToolbarRootContext-3DRfEU0Q.js";import"./getDisabledMountTransitionStyles-D8gt5JL7.js";import"./getPseudoElementBounds-Bzvith0Z.js";import"./chevron-down-zZ58BLda.js";import"./index-C8CW-UMA.js";import"./error-Bp_j0tyg.js";import"./BaseCbacBanner-DueaaImF.js";import"./makeExternalStore-Dw-8aD8B.js";import"./Tooltip-DXd-c-BV.js";import"./PopoverPopup-DOy0S3uG.js";import"./debounce-DapI4ZKL.js";import"./useOsdkClient-DJKFKBMb.js";import"./tick-CiTQftSD.js";import"./DropdownField-BbPTQMjY.js";import"./isEqual-Cm_OyyYX.js";import"./withOsdkMetrics-Cv3w3vr0.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
