import{j as i}from"./iframe-B8zlsrHH.js";import{O as p}from"./object-table-BpZ24KDy.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C-JQztZ7.js";import"./preload-helper-C0b0An0Y.js";import"./Table-DpbVZ_xi.js";import"./index-tfK5NBPh.js";import"./Dialog-D6_7BAu8.js";import"./cross-DaFAEeUI.js";import"./svgIconContainer-93ic9H0u.js";import"./useBaseUiId-CmAD5Nv6.js";import"./InternalBackdrop-D9A75Q7m.js";import"./composite-CqVw9i-r.js";import"./index-BDPlX1qs.js";import"./index-CVRibSdI.js";import"./index-8FJlbEEh.js";import"./useEventCallback-B8_XFHjh.js";import"./SkeletonBar-B0OBJJ-q.js";import"./LoadingCell-1YxnfUQR.js";import"./ColumnConfigDialog-BCADU03z.js";import"./DraggableList-WXseg1bu.js";import"./search-BU1Su8pV.js";import"./Input-CqRPwD_J.js";import"./useControlled-0KT-Nbfb.js";import"./Button-D-b8a2cD.js";import"./small-cross-CcSvAReI.js";import"./ActionButton-BvyKYeoC.js";import"./Checkbox-UUf41hjt.js";import"./useValueChanged-DrbNpYIS.js";import"./CollapsiblePanel-DzQiRjZ4.js";import"./MultiColumnSortDialog-BD78BEQ7.js";import"./MenuTrigger-BPAG6_e8.js";import"./CompositeItem-CS-yxRHH.js";import"./ToolbarRootContext-rZcpvLxX.js";import"./getDisabledMountTransitionStyles-CGmmOIb5.js";import"./getPseudoElementBounds-8Tn-EeOs.js";import"./chevron-down-Cv_0_uCQ.js";import"./index-9c3pIfa3.js";import"./error-3ug2VmSe.js";import"./BaseCbacBanner-c3VRF40a.js";import"./makeExternalStore-BAH7otcI.js";import"./Tooltip-DY3JvpZs.js";import"./PopoverPopup-CsbWvaPD.js";import"./debounce-4L--7xKE.js";import"./useOsdkClient-DS2yUYbO.js";import"./tick-BlBXVcaW.js";import"./DropdownField-QqA07BX-.js";import"./isEqual-_YTctGwj.js";import"./withOsdkMetrics-vJQGO9MO.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
