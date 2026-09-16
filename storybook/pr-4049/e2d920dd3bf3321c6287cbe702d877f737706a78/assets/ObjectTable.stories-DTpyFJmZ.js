import{j as i}from"./iframe-DsISivmL.js";import{O as p}from"./object-table-D-R8-m_2.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Cll2JGxN.js";import"./preload-helper-BzOTEX4h.js";import"./Table-HjUSSdiq.js";import"./index-CA9KUbCW.js";import"./Dialog-CxNOiwWg.js";import"./cross-BGShLWmS.js";import"./svgIconContainer-Dp3EEAal.js";import"./useBaseUiId-CMSPxGM5.js";import"./InternalBackdrop-B7T_UWK7.js";import"./composite-0zr51VGP.js";import"./index-CLDUlJNg.js";import"./index-vtVyo2v8.js";import"./index-ji8x1IHY.js";import"./useEventCallback-COAm-0TE.js";import"./SkeletonBar-c-f45sOv.js";import"./LoadingCell-Ruo-nYP2.js";import"./ColumnConfigDialog-BzPFK1xr.js";import"./DraggableList-gCYQPmCE.js";import"./search-BjXP8SQo.js";import"./Input-C-IYkLA_.js";import"./useControlled-B8XvalbJ.js";import"./Button-CSztET3k.js";import"./small-cross-DPV9Jc_E.js";import"./ActionButton-DYgFtpFn.js";import"./Checkbox-CwZnYDKw.js";import"./useValueChanged-CEyGGyfc.js";import"./CollapsiblePanel-DeMaCQ59.js";import"./MultiColumnSortDialog-BLRN6IbJ.js";import"./MenuTrigger-P7xuahsz.js";import"./CompositeItem-DPkp3H9j.js";import"./ToolbarRootContext-BoW9B8ED.js";import"./getDisabledMountTransitionStyles-DyXUV0ZO.js";import"./getPseudoElementBounds-D8rG3FVx.js";import"./chevron-down-CGSFBjuL.js";import"./index-CKh5Salv.js";import"./error-33DrpFja.js";import"./BaseCbacBanner-BwGv_eo7.js";import"./makeExternalStore-Bj-L88f8.js";import"./Tooltip-DWpaGJhu.js";import"./PopoverPopup-Cxkx2QUZ.js";import"./debounce-X_5agJaU.js";import"./useOsdkClient-zAtHZEwL.js";import"./tick-Ccm3lDvW.js";import"./DropdownField-CvZQLsdV.js";import"./isEqual-DJpzJyhX.js";import"./withOsdkMetrics-D6_E0WHa.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
