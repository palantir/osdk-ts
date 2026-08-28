import{j as i}from"./iframe-6-lsrwMw.js";import{O as p}from"./object-table-BD5fLK_U.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-aOD7t1dH.js";import"./preload-helper-Db94U03p.js";import"./Table-CkrRI7-F.js";import"./index-DH_wHqGf.js";import"./Dialog-r2SlhXyP.js";import"./cross-YaAg5Emc.js";import"./svgIconContainer-XYTAu43b.js";import"./useBaseUiId-CL8n1QSk.js";import"./InternalBackdrop-B6K0nBuz.js";import"./composite-49wknnqt.js";import"./index-Bw-N-TJf.js";import"./index-1sUFjhZs.js";import"./index-DzLg0_9K.js";import"./useEventCallback-CfIHiVet.js";import"./SkeletonBar-Cpo0DVFp.js";import"./LoadingCell-Dpvyiyjr.js";import"./ColumnConfigDialog--fXwNZ3n.js";import"./DraggableList-CMebvrw0.js";import"./search-DcT9O0hm.js";import"./Input-DmhHRvF_.js";import"./useControlled-Do4cdAri.js";import"./Button-BajEEQr1.js";import"./small-cross-DrQAtv1a.js";import"./ActionButton-DdMfURgP.js";import"./Checkbox-95Z5M751.js";import"./useValueChanged-9nNSuzsu.js";import"./CollapsiblePanel-BsHL6Fuo.js";import"./MultiColumnSortDialog-PE-F8gRf.js";import"./MenuTrigger-4UQAkATc.js";import"./CompositeItem-B37GUCR2.js";import"./ToolbarRootContext-DZy52B3w.js";import"./getDisabledMountTransitionStyles-DSJQnDkW.js";import"./getPseudoElementBounds-docA_U__.js";import"./chevron-down-CRB-_0Nc.js";import"./index-DfdKE2my.js";import"./error-B3oxwr-6.js";import"./BaseCbacBanner-DwZ57uy4.js";import"./makeExternalStore-7KIsSfAR.js";import"./Tooltip-BeHTL_ss.js";import"./PopoverPopup-Ct_ibkbw.js";import"./debounce-Dbd1txbU.js";import"./useOsdkClient-Ds0tcoZm.js";import"./tick-S3MoWbWh.js";import"./DropdownField-B4-i467w.js";import"./isEqual-DDH6bZop.js";import"./withOsdkMetrics-B8Q-upjJ.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
