import{j as i}from"./iframe-Bbj8rm_V.js";import{O as p}from"./object-table-5_esxdbq.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DRV8sxMu.js";import"./preload-helper-D6Fx-mKo.js";import"./Table-CX7l8D-O.js";import"./index-Dq2MMzil.js";import"./Dialog-PqyQrZYx.js";import"./cross-DBtpPd0D.js";import"./svgIconContainer-BUx50-vg.js";import"./useBaseUiId-DNWEd936.js";import"./InternalBackdrop-kx6x5ne-.js";import"./composite-Dd0Cawl-.js";import"./index-wCPgzdXR.js";import"./index-DijupkwT.js";import"./index-DpjApppD.js";import"./useEventCallback-wJ0LYxwh.js";import"./SkeletonBar-DmRq_NJ3.js";import"./LoadingCell-GH6mJhL-.js";import"./ColumnConfigDialog-CWmXgvHX.js";import"./DraggableList-rWaVA9Cc.js";import"./search-PnNyfQZV.js";import"./Input-CHlhWJjT.js";import"./useControlled-CA2uOZy1.js";import"./Button-Dy0jx2Ef.js";import"./small-cross-CLfkAhz4.js";import"./ActionButton-C-i_Pxdj.js";import"./Checkbox-pjKjAT32.js";import"./useValueChanged-f5I0dvEN.js";import"./CollapsiblePanel-C_9NzZbd.js";import"./MultiColumnSortDialog-eUHVzGJ9.js";import"./MenuTrigger-DhLXHFbW.js";import"./CompositeItem-CBUY4KWM.js";import"./ToolbarRootContext-ZiL2Vz-F.js";import"./getDisabledMountTransitionStyles-CGbcTXfA.js";import"./getPseudoElementBounds-VeOlnm8c.js";import"./chevron-down-CHGSFnin.js";import"./index-BFuwLodk.js";import"./error-UxBVQGvQ.js";import"./BaseCbacBanner-B26VtbjG.js";import"./makeExternalStore-B9UD_2Tu.js";import"./Tooltip-DrOHS7nL.js";import"./PopoverPopup-CdeNDKDp.js";import"./debounce-D6u-Quyv.js";import"./useOsdkClient-CWIMLvdJ.js";import"./tick-H1bNLZVn.js";import"./DropdownField-CbgT0A6x.js";import"./isEqual-B2OLfJBW.js";import"./withOsdkMetrics-BeB3Egw6.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
