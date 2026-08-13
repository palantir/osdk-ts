import{j as i}from"./iframe-Blz4LoHP.js";import{O as p}from"./object-table-C4GsO2cv.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CNHDD7ow.js";import"./preload-helper-foE4JgZ2.js";import"./Table-D0p3OMnU.js";import"./index-CUYER3DO.js";import"./Dialog-BXXiVsUS.js";import"./cross-BHEKJ-xu.js";import"./svgIconContainer-BuunOq3e.js";import"./useBaseUiId-UaklEsw9.js";import"./InternalBackdrop-DN42fX-a.js";import"./composite-CXEOluk-.js";import"./index-DpYCY6fP.js";import"./index-D8NTGdmQ.js";import"./index-_-bQl4h5.js";import"./useEventCallback--MWQrumu.js";import"./SkeletonBar-C3xikPhc.js";import"./LoadingCell-Bbk55PmP.js";import"./ColumnConfigDialog-dvAiDUdX.js";import"./DraggableList-pafhfntw.js";import"./search-CWcz5URn.js";import"./Input--2U01S_F.js";import"./useControlled-CnlJbyLP.js";import"./Button-Cv_Vsur6.js";import"./small-cross-4OnN50dl.js";import"./ActionButton-B5NvVbbS.js";import"./Checkbox-DzgcS57R.js";import"./useValueChanged-DUdm1KWZ.js";import"./CollapsiblePanel-DBNydUPu.js";import"./MultiColumnSortDialog-BneKJKoK.js";import"./MenuTrigger-yP6x7n5y.js";import"./CompositeItem-udJn1Dzr.js";import"./ToolbarRootContext-D4Igr_5K.js";import"./getDisabledMountTransitionStyles-CNGduUJp.js";import"./getPseudoElementBounds-CGsoSiym.js";import"./chevron-down-DcvlWZQj.js";import"./index-CttXvCYf.js";import"./error-B_nCzUte.js";import"./BaseCbacBanner-C_JRlpKM.js";import"./makeExternalStore-CAzuqfsN.js";import"./Tooltip-DIjd2FOB.js";import"./PopoverPopup-Dk3e8uy-.js";import"./debounce-X-kCipRL.js";import"./useOsdkClient-C-Xr9PdN.js";import"./tick-DAoIo5QV.js";import"./DropdownField-DhF3yGmk.js";import"./isEqual-DclTeP20.js";import"./withOsdkMetrics-B_mvTTGH.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
