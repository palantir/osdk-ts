import{j as i}from"./iframe-D8UHlLM-.js";import{O as p}from"./object-table-DriLHpx0.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Cp3sB6tJ.js";import"./preload-helper-B2drndpz.js";import"./Table-DIJzy73N.js";import"./index-2pZAxqQ8.js";import"./Dialog-LP3kER3w.js";import"./cross-zCnfpZEf.js";import"./svgIconContainer-Ckme5BEx.js";import"./useBaseUiId-B83MHcbd.js";import"./InternalBackdrop-BiFzgO2t.js";import"./composite-BYq1KtFB.js";import"./index-DrmX_pzR.js";import"./index-BrcjEskR.js";import"./index-CbaYF84n.js";import"./useEventCallback-BoHAEoDT.js";import"./SkeletonBar-BE_VQs-9.js";import"./LoadingCell-BIhXQH6G.js";import"./ColumnConfigDialog-DUp2kRps.js";import"./DraggableList-waEoSKM6.js";import"./search-DmARyhAU.js";import"./Input-BHmmIdQN.js";import"./useControlled-DT-SiHVq.js";import"./Button-SSlA87_g.js";import"./small-cross-LQUt3Gb7.js";import"./ActionButton-BScY58m0.js";import"./Checkbox-DGOEyl7w.js";import"./useValueChanged-BuBsDfgp.js";import"./CollapsiblePanel-CifK208E.js";import"./MultiColumnSortDialog-Cqg1dnup.js";import"./MenuTrigger-BfJ69Gas.js";import"./CompositeItem-DhPX7cGM.js";import"./ToolbarRootContext-Df4LXHpy.js";import"./getDisabledMountTransitionStyles-CbL9qvCd.js";import"./getPseudoElementBounds-Cr-VGz-T.js";import"./chevron-down-B03gIwVp.js";import"./index-CwPCwgJ9.js";import"./error-CsDtSshc.js";import"./BaseCbacBanner-Clb2sC9-.js";import"./makeExternalStore-CDgVz-Cr.js";import"./Tooltip-BSlgHJeE.js";import"./PopoverPopup-Dye_SGlA.js";import"./debounce-DEV0SMqr.js";import"./useOsdkClient-HNKtj353.js";import"./tick-CckWobbk.js";import"./DropdownField-BqKtTUT-.js";import"./isEqual-BKZS-MzX.js";import"./withOsdkMetrics-BtMau99A.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
