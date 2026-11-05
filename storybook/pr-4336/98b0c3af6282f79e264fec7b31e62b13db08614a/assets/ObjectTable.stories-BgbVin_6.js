import{j as i}from"./iframe-fiDzxSac.js";import{O as p}from"./object-table-Cfy5VgMd.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-K-WCjZzf.js";import"./preload-helper-vUH8WtXv.js";import"./Table-DKy28Mke.js";import"./index-RsLmo9Ef.js";import"./Dialog-DOJr_i77.js";import"./cross-Dj0Tr1LR.js";import"./svgIconContainer-DuFQRV6L.js";import"./useBaseUiId-D5crqalZ.js";import"./InternalBackdrop-CodZtGfP.js";import"./composite-BaurXFau.js";import"./index-ZxWxF6R4.js";import"./index-CFMoivIb.js";import"./index-BbKVh42F.js";import"./useEventCallback-CNobfbIA.js";import"./SkeletonBar-Bv_L57OJ.js";import"./LoadingCell-CzRJ6sTb.js";import"./ColumnConfigDialog-2FQHcVYm.js";import"./DraggableList-BSfGvR0K.js";import"./search-B0MLGd_Y.js";import"./Input-kfNjj_-b.js";import"./useControlled-CY87ml-W.js";import"./Button-BF-ip-LD.js";import"./small-cross-XpA8OmpU.js";import"./ActionButton-DJAwwkO8.js";import"./Checkbox-C_Tjg2ZD.js";import"./useValueChanged-DVEDmsGJ.js";import"./CollapsiblePanel-rOI86CBK.js";import"./MultiColumnSortDialog-CEkRnoUu.js";import"./MenuTrigger-D7sevTuD.js";import"./CompositeItem-CFHCXDOZ.js";import"./ToolbarRootContext-C3QdEmtK.js";import"./getDisabledMountTransitionStyles-Cl4MErAH.js";import"./getPseudoElementBounds-Cz4hQZQV.js";import"./chevron-down-BeNvA5Jp.js";import"./index-CxuMtNmx.js";import"./error-DWaVmqt2.js";import"./BaseCbacBanner-Df49S7d1.js";import"./makeExternalStore-GIa5UA4P.js";import"./Tooltip-BmuBTOPC.js";import"./PopoverPopup-CoMFK958.js";import"./debounce-D-d1nhMU.js";import"./useOsdkClient-BTUTxBhe.js";import"./tick-_9QlYMSH.js";import"./DropdownField-Pss_3XlK.js";import"./isEqual-Dm9UOhP2.js";import"./withOsdkMetrics-CGcDstXp.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
