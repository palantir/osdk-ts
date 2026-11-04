import{j as i}from"./iframe-DdqwQQfw.js";import{O as p}from"./object-table-DC2LuNpA.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DiIQ4MuB.js";import"./preload-helper-Do8DhNTP.js";import"./Table-DuFe3xsr.js";import"./index-BEo5fRZG.js";import"./Dialog-Cg65FL_X.js";import"./cross-D_2LRYUd.js";import"./svgIconContainer-z_HFHagN.js";import"./useBaseUiId-Bcpg3lGk.js";import"./InternalBackdrop-BI5ASDuz.js";import"./composite-BS7fyn0m.js";import"./index-DUGkPzpV.js";import"./index-DqbF2orL.js";import"./index-DGo2jayS.js";import"./useEventCallback-DRJH6OEM.js";import"./SkeletonBar-CxTwW2pN.js";import"./LoadingCell-T5dcwu1-.js";import"./ColumnConfigDialog-N9XdbNhr.js";import"./DraggableList-DpMAnnH0.js";import"./search-BAD3BF_p.js";import"./Input-Ddm5AThx.js";import"./useControlled-DlTcdMFR.js";import"./Button-D31p01oo.js";import"./small-cross-0mGWC0pa.js";import"./ActionButton-ixUyXV1s.js";import"./Checkbox-CJ9apblZ.js";import"./useValueChanged-DXSqqnXt.js";import"./CollapsiblePanel-DoAzLAFA.js";import"./MultiColumnSortDialog-DWe2imCo.js";import"./MenuTrigger-VDaXaEjF.js";import"./CompositeItem-rVjlE15s.js";import"./ToolbarRootContext-BDaRyBS_.js";import"./getDisabledMountTransitionStyles-BPMv8sxJ.js";import"./getPseudoElementBounds-CxeR3TvN.js";import"./chevron-down-RBc_HqKE.js";import"./index-ByyVIpwn.js";import"./error-BE-sE7Te.js";import"./BaseCbacBanner-9dan2OAm.js";import"./makeExternalStore-C_arn_CF.js";import"./Tooltip-CBEbeLyL.js";import"./PopoverPopup-CnpcTZxS.js";import"./debounce-C-_Fx2Z2.js";import"./useOsdkClient-DRVnONzi.js";import"./tick-CVZaQjhe.js";import"./DropdownField-DSWv5JEX.js";import"./isEqual-KM0nLl8C.js";import"./withOsdkMetrics-VwlQjk8h.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
