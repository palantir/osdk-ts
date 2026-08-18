import{j as i}from"./iframe-CaT_SB1N.js";import{O as p}from"./object-table-DxWFz5_z.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CFQEBVan.js";import"./preload-helper-BPrtRX9r.js";import"./Table-BPF3DIoq.js";import"./index-Dd6LgUAX.js";import"./Dialog-588UW6Qz.js";import"./cross-BWOJYHQ2.js";import"./svgIconContainer-Bz8Ma6vE.js";import"./useBaseUiId-CvmHPMet.js";import"./InternalBackdrop-DaZylwN7.js";import"./composite-5peG0ZaO.js";import"./index-Sztf62uh.js";import"./index-CGIYb_6P.js";import"./index-ynByCEBN.js";import"./useEventCallback-CVPMd79M.js";import"./SkeletonBar-CxMrTn-U.js";import"./LoadingCell-D7zj3eW1.js";import"./ColumnConfigDialog-Bg6SY_Ld.js";import"./DraggableList-uveBSP7V.js";import"./search-CPBZ1v0m.js";import"./Input-B2ntkDdJ.js";import"./useControlled-Fy1hnDi2.js";import"./isEqual-BrC4uVGU.js";import"./isObject-KEZJ5QTR.js";import"./Button-BkKNJWx6.js";import"./ActionButton-Bp-l3MqX.js";import"./Checkbox-BwZLW8Tq.js";import"./useValueChanged-BUQcfQU6.js";import"./CollapsiblePanel-BSFye_sE.js";import"./MultiColumnSortDialog-C7y3pk0H.js";import"./MenuTrigger-BSmne0Gh.js";import"./CompositeItem-C1Yswmxi.js";import"./ToolbarRootContext-BobQvyh-.js";import"./getDisabledMountTransitionStyles-CHrpwNSH.js";import"./getPseudoElementBounds-Buoi7Tjq.js";import"./chevron-down-CJo4dMXj.js";import"./index-Clp_coQb.js";import"./error-Ca_B-WSi.js";import"./BaseCbacBanner-CyE-IyFA.js";import"./makeExternalStore-CruiM0F1.js";import"./Tooltip-BsBvfL1j.js";import"./PopoverPopup-DBi1WA6M.js";import"./toNumber-HvOjUaHa.js";import"./useOsdkClient-C37wa3ql.js";import"./tick-Bq27YaX3.js";import"./DropdownField-Do15YAuW.js";import"./withOsdkMetrics-3xHWN_Ge.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
