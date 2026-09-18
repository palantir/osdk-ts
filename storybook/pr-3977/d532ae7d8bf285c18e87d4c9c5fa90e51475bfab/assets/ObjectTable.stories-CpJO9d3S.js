import{j as i}from"./iframe-TxXxbmz5.js";import{O as p}from"./object-table-DOS0WT1a.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BtpPRLMB.js";import"./preload-helper-CpxRQbhd.js";import"./Table-C2X14doc.js";import"./index-CN0gJRJO.js";import"./Dialog-DT7VSMak.js";import"./cross-VXN4aiwS.js";import"./svgIconContainer-CELXinHy.js";import"./useBaseUiId-Br3V4Y7Q.js";import"./InternalBackdrop-CetaIsfW.js";import"./composite-DOASapxT.js";import"./index-B7GgCYYh.js";import"./index-CIu9B3ha.js";import"./index-DyCiBw5P.js";import"./useEventCallback-g6vs120_.js";import"./SkeletonBar-BMAk9jbB.js";import"./LoadingCell-DPGrgI7B.js";import"./ColumnConfigDialog-zuV-SXCD.js";import"./DraggableList-DN_w3IKW.js";import"./search-BC9yKYZ2.js";import"./Input-B4WkyavH.js";import"./useControlled-DruZmDs3.js";import"./Button-LZRzEtLJ.js";import"./small-cross-Cdx0iwCB.js";import"./ActionButton-D-hbTAJE.js";import"./Checkbox-CARz_iuB.js";import"./useValueChanged-CWKC294z.js";import"./CollapsiblePanel-dwMPUOFS.js";import"./MultiColumnSortDialog-Dg0KJEfa.js";import"./MenuTrigger-BBnNVDOO.js";import"./CompositeItem-BE7Mz5Vz.js";import"./ToolbarRootContext-BWpuHFgW.js";import"./getDisabledMountTransitionStyles-C9uIvqp9.js";import"./getPseudoElementBounds-DfyCOY8U.js";import"./chevron-down-BclEY4pC.js";import"./index-CRtDM6bX.js";import"./error-DK4Y1HxX.js";import"./BaseCbacBanner-BekuzNeO.js";import"./makeExternalStore-Da0z5igE.js";import"./Tooltip-FiY13jbJ.js";import"./PopoverPopup-CPS5tfTo.js";import"./debounce-CnngSnsz.js";import"./useOsdkClient-CCaWk0Px.js";import"./tick-CF_Cqk30.js";import"./DropdownField-Cuo6Kh-T.js";import"./isEqual-Vj9O0wAi.js";import"./withOsdkMetrics-BEHPBM8E.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
