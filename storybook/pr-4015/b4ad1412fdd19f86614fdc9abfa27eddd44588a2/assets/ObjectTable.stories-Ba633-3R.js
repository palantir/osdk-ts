import{j as i}from"./iframe-vupRmrl1.js";import{O as p}from"./object-table-BhZpyXrV.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B-j_6blh.js";import"./preload-helper-gDtGaGRc.js";import"./Table-BhkPCP2Y.js";import"./index-DyT3w31I.js";import"./Dialog-BkfrMvl2.js";import"./cross-DtkFdwBY.js";import"./svgIconContainer-BMvPRZYr.js";import"./useBaseUiId-BHpjHq0v.js";import"./InternalBackdrop-cx_OFO3C.js";import"./composite-D7MQDgRI.js";import"./index-ByLKmROF.js";import"./index-CNpYqLTE.js";import"./index-F5fjgwJh.js";import"./useEventCallback-DHCVut8W.js";import"./SkeletonBar-xIK3fn_d.js";import"./LoadingCell-Ct0NaKdA.js";import"./ColumnConfigDialog-CTLgRMm4.js";import"./DraggableList-Df9M_FoJ.js";import"./search-DJT3mMGf.js";import"./Input-3k8TfuM7.js";import"./useControlled-DsYwW81O.js";import"./Button-DJ6M6HmU.js";import"./small-cross-buimVDlm.js";import"./ActionButton-Dc8eWvAd.js";import"./Checkbox-D2IGozPx.js";import"./useValueChanged-BYJmb_es.js";import"./CollapsiblePanel-CwbSoIsS.js";import"./MultiColumnSortDialog-D1-IQV-T.js";import"./MenuTrigger-C1lcDrTT.js";import"./CompositeItem-D7w73J8v.js";import"./ToolbarRootContext-C266FSVf.js";import"./getDisabledMountTransitionStyles-CfnsRoCh.js";import"./getPseudoElementBounds-Buq5V0z-.js";import"./chevron-down-LKL_MfU5.js";import"./index-Ko_HwzJV.js";import"./error-Ccrq6RR-.js";import"./BaseCbacBanner-DWSqI5hZ.js";import"./makeExternalStore-D9V5Ayqr.js";import"./Tooltip-BEypgjel.js";import"./PopoverPopup-zyqahA1m.js";import"./debounce-CYhWcO7f.js";import"./useOsdkClient-LWof9usE.js";import"./tick-De0oRo06.js";import"./DropdownField-DSd0Acyw.js";import"./isEqual-JS74y3x-.js";import"./withOsdkMetrics-CfzTocUk.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
