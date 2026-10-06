import{j as i}from"./iframe-OTC_SZd0.js";import{O as p}from"./object-table-DJdw5Y3U.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C6Q0CjKQ.js";import"./preload-helper-1vGzY75P.js";import"./Table-YbkGpIvE.js";import"./index-BoJX-ksu.js";import"./Dialog-Bn1d6Lwf.js";import"./cross-DqMcRqPP.js";import"./svgIconContainer-BcCPLcaR.js";import"./useBaseUiId-CX-b-AU2.js";import"./InternalBackdrop-C2smTE49.js";import"./composite-DmMBTPuj.js";import"./index-CvsR1t9J.js";import"./index-UWWplry5.js";import"./index-BSLVBTuk.js";import"./useEventCallback-69mtBwYt.js";import"./SkeletonBar-B9Sf-YB8.js";import"./LoadingCell-ba9qrIBe.js";import"./ColumnConfigDialog-BHEFKSzZ.js";import"./DraggableList-CphGWXXO.js";import"./search-CqHOzh_J.js";import"./Input-RoK9jBHN.js";import"./useControlled-VRarZ-1e.js";import"./Button-Cp-yQ_WA.js";import"./small-cross-BSXT4voL.js";import"./ActionButton-B6wO2OKA.js";import"./Checkbox-iWY9dY4i.js";import"./useValueChanged-BI84kVyH.js";import"./CollapsiblePanel-C1ftD3Jy.js";import"./MultiColumnSortDialog-DP2VsSjs.js";import"./MenuTrigger-aZDl9AA7.js";import"./CompositeItem-JGQEQxmA.js";import"./ToolbarRootContext-BqVPJrpg.js";import"./getDisabledMountTransitionStyles-Djfv408z.js";import"./getPseudoElementBounds-CucAzF8-.js";import"./chevron-down-Bq3D3uVm.js";import"./index-D_oKlTjT.js";import"./error-DRGNiszN.js";import"./BaseCbacBanner-ClL40Yjf.js";import"./makeExternalStore-CJLgs2ND.js";import"./Tooltip-Cx2J9Tyo.js";import"./PopoverPopup-gvz3_YST.js";import"./debounce-CKQsYhti.js";import"./useOsdkClient-DCm7AWwJ.js";import"./tick-CiIM5WDj.js";import"./DropdownField-fJtfAUzJ.js";import"./isEqual-33bb34dj.js";import"./withOsdkMetrics-BAfhlptC.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
