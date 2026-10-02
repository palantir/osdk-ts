import{j as i}from"./iframe-DopY1iFB.js";import{O as p}from"./object-table-DrHRM2Vu.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-0s3sbTQ3.js";import"./preload-helper-vT8POVDR.js";import"./Table-BtDoN67p.js";import"./index-CCfIWMGJ.js";import"./Dialog-DxxR-Nq8.js";import"./cross-y3ZfqzAA.js";import"./svgIconContainer-DKL3lG_j.js";import"./useBaseUiId-z-VkK_Xn.js";import"./InternalBackdrop-DaE_AKxd.js";import"./composite-BGFtTgn-.js";import"./index-CsUmhPmI.js";import"./index-CI3yqxJd.js";import"./index-C_zMkdHf.js";import"./useEventCallback-D2MDEmYo.js";import"./SkeletonBar-DK89tHws.js";import"./LoadingCell-DVfOKHP2.js";import"./ColumnConfigDialog-B8UtcMyX.js";import"./DraggableList-BJ6dbmeK.js";import"./search-CxfNGXVV.js";import"./Input-DdA-yANI.js";import"./useControlled-ClnCU8CR.js";import"./Button-BegRP6Wf.js";import"./small-cross-B8texXT0.js";import"./ActionButton-BHuru14O.js";import"./Checkbox-Dbl_-bLm.js";import"./useValueChanged-3u49EqeQ.js";import"./CollapsiblePanel-BqNboL-f.js";import"./MultiColumnSortDialog-DwldqtuV.js";import"./MenuTrigger-BuV2I-Gd.js";import"./CompositeItem-D98VU1_Q.js";import"./ToolbarRootContext-CFKLRcpG.js";import"./getDisabledMountTransitionStyles-DGXlslWy.js";import"./getPseudoElementBounds-_OfctKy9.js";import"./chevron-down-Cn7sl9Ua.js";import"./index-BlOFqzc6.js";import"./error-CTe9ttET.js";import"./BaseCbacBanner-bFfRsFJv.js";import"./makeExternalStore-B0UtzOn_.js";import"./Tooltip-qqUuKaYI.js";import"./PopoverPopup-CUxKzeOX.js";import"./debounce-B5Mx60fy.js";import"./useOsdkClient-BB4N8s6G.js";import"./tick-_PIvioO0.js";import"./DropdownField-hIeQcSW8.js";import"./isEqual-BBHg5dQ3.js";import"./withOsdkMetrics-BFGwpRHC.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
