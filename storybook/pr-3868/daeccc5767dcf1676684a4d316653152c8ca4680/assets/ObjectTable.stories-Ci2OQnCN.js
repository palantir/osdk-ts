import{j as i}from"./iframe-BWtbK-6e.js";import{O as p}from"./object-table-BeG3Fp0X.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D--7M42r.js";import"./preload-helper-D-SpX73X.js";import"./Table-DZGatbGL.js";import"./index-BJRZeoAy.js";import"./Dialog-BEPd95YN.js";import"./cross-BbOW2-LY.js";import"./svgIconContainer-tYWwIhLy.js";import"./useBaseUiId-p9hIi61X.js";import"./InternalBackdrop-BzojnLK2.js";import"./composite-O3B6JlFs.js";import"./index-DiSQQItY.js";import"./index-D3iqlyMR.js";import"./index-DHGG6V2S.js";import"./useEventCallback-DddqoMx1.js";import"./SkeletonBar-kaCc09Tm.js";import"./LoadingCell-ShKZoh7z.js";import"./ColumnConfigDialog-DQraDrLD.js";import"./DraggableList-BuwDh5HR.js";import"./search-BR8rsC3q.js";import"./Input-BPHe4LBr.js";import"./useControlled-C9p9N_86.js";import"./Button-B0i6dGlw.js";import"./small-cross-DWeilFPO.js";import"./ActionButton-BnuYZXjr.js";import"./Checkbox-CoRA8Ex9.js";import"./useValueChanged-CJvIonTN.js";import"./CollapsiblePanel-DtJGVwEB.js";import"./MultiColumnSortDialog-BeLdjw16.js";import"./MenuTrigger-Bbwd1Fl8.js";import"./CompositeItem-14mpYRhD.js";import"./ToolbarRootContext-DLdfgRBt.js";import"./getDisabledMountTransitionStyles-CFautW_r.js";import"./getPseudoElementBounds-B_KVOqfv.js";import"./chevron-down-D1Mpjl8C.js";import"./index-CDa_2TTR.js";import"./error-kr-jwrPU.js";import"./BaseCbacBanner-CTh-qVwr.js";import"./makeExternalStore-1AVtHYwG.js";import"./Tooltip-BUTgCb4R.js";import"./PopoverPopup-Cxt_nQB5.js";import"./debounce-BB2MUM9s.js";import"./useOsdkClient-BiSLEIke.js";import"./tick-IhvTufAd.js";import"./DropdownField-vBIsoJCc.js";import"./isEqual-BRdqoqrQ.js";import"./withOsdkMetrics-DQ89NQ44.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
