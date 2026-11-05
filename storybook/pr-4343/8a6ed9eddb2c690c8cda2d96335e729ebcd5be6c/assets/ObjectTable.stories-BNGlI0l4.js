import{j as i}from"./iframe-PwAIVm5u.js";import{O as p}from"./object-table-DY849b9y.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Dxl81YNR.js";import"./preload-helper-CQv3h1eP.js";import"./Table-DNejCOAN.js";import"./index-Ca_oKjEa.js";import"./Dialog-CeDh1vNg.js";import"./cross-GcEEbHxC.js";import"./svgIconContainer-HsDGQ90M.js";import"./useBaseUiId-BhpsHhZ2.js";import"./InternalBackdrop-CYy1iHZN.js";import"./composite-fUnz6yuB.js";import"./index-RdMLhv4M.js";import"./index-BihfBpP7.js";import"./index-Bviik-9F.js";import"./useEventCallback-Dm32TZ3_.js";import"./SkeletonBar-DN3kNMYz.js";import"./LoadingCell-3Qe48Snu.js";import"./ColumnConfigDialog-DKKYAnhw.js";import"./DraggableList-CRuyA61G.js";import"./search-Nx9kE-Q8.js";import"./Input-CPGzuvOj.js";import"./useControlled-_4ugvpeb.js";import"./Button-VHGYpAX6.js";import"./small-cross-B14kqehl.js";import"./ActionButton-CWjydIzu.js";import"./Checkbox-CQ2TGsAv.js";import"./useValueChanged-CkHl3qLX.js";import"./CollapsiblePanel-C0dv2KPd.js";import"./MultiColumnSortDialog-DIgP8_n1.js";import"./MenuTrigger-B-Ppd0wN.js";import"./CompositeItem-DPCNdhZq.js";import"./ToolbarRootContext-BB_k_Kqj.js";import"./getDisabledMountTransitionStyles-BRie3ZsF.js";import"./getPseudoElementBounds-bZ1W59vq.js";import"./chevron-down-BA5gqzEX.js";import"./index-hThCMCFD.js";import"./error-DMntN0M5.js";import"./BaseCbacBanner-D1NRoB1o.js";import"./makeExternalStore-CqOzjQXJ.js";import"./Tooltip-tjFL-LBL.js";import"./PopoverPopup-sM0UeHOu.js";import"./debounce-C27HzrcV.js";import"./useOsdkClient-PEgelIDi.js";import"./tick-DC7CcLKp.js";import"./DropdownField-C6vsf0E7.js";import"./isEqual-BQTmfRt9.js";import"./withOsdkMetrics-38iXVMUT.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
