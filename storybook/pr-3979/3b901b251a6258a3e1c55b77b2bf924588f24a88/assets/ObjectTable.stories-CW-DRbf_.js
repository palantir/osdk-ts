import{j as i}from"./iframe-BZrMvNjH.js";import{O as p}from"./object-table-RCunOAME.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Bh7ShKWk.js";import"./preload-helper-hIhWcbk1.js";import"./Table-D67UCRoD.js";import"./index-DS2flFfG.js";import"./Dialog-ageSGZBC.js";import"./cross-iphUExt8.js";import"./svgIconContainer-CY0qYkeS.js";import"./useBaseUiId-CswL1btF.js";import"./InternalBackdrop-CoHxh-ms.js";import"./composite-Bvd7iHGV.js";import"./index-BlvQlGL4.js";import"./index-CClIcESQ.js";import"./index-JV3nPluQ.js";import"./useEventCallback-CAOOmdIa.js";import"./SkeletonBar-Xz-ijpwF.js";import"./LoadingCell-CWggzeLE.js";import"./ColumnConfigDialog-Bgj_OExF.js";import"./DraggableList-BzciFWwo.js";import"./search-DxeR06nu.js";import"./Input-nfoLLdye.js";import"./useControlled-Bj7UVyPM.js";import"./Button-DnumB7pL.js";import"./small-cross-BHthMG8B.js";import"./ActionButton-CKfsqSSC.js";import"./Checkbox-DZ1sQOZV.js";import"./useValueChanged-BA_Uq0OY.js";import"./CollapsiblePanel-CA4hGbc8.js";import"./MultiColumnSortDialog-C94PGO1v.js";import"./MenuTrigger-DJu2giNb.js";import"./CompositeItem-Dintp2Bw.js";import"./ToolbarRootContext-CSb78eVd.js";import"./getDisabledMountTransitionStyles-DAqLr02q.js";import"./getPseudoElementBounds-BdZebYSH.js";import"./chevron-down-Cbk6ruv5.js";import"./index-B3YZJx-I.js";import"./error-C4YZPalR.js";import"./BaseCbacBanner-BZ3dE9N7.js";import"./makeExternalStore-DqJxB7HS.js";import"./Tooltip-DVr0E3LF.js";import"./PopoverPopup-bwa0KoYC.js";import"./debounce-DNzZdSc8.js";import"./useOsdkClient-Cc19J1k8.js";import"./tick-DlglnSJ9.js";import"./DropdownField-CBvpYEAv.js";import"./isEqual-CtIzUrZm.js";import"./withOsdkMetrics-C9uhYNX4.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
