import{j as i}from"./iframe-BAYjgPn_.js";import{O as p}from"./object-table-D44_X8da.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-By2b31Ex.js";import"./preload-helper-BJCl-bRv.js";import"./Table-O1TVlUbQ.js";import"./index-DN0zke96.js";import"./Dialog-MEJqogj4.js";import"./cross-BXQxs_UM.js";import"./svgIconContainer-Bdz9mcrS.js";import"./useBaseUiId-Btxh7Hdv.js";import"./InternalBackdrop-B546RbTG.js";import"./composite-CSv2xCWn.js";import"./index-BCKNZ_-u.js";import"./index-ewU9n-Bp.js";import"./index-B1NZC5HL.js";import"./useEventCallback-CIqiLNSA.js";import"./SkeletonBar-CIlY-zEK.js";import"./LoadingCell-Be4wMunU.js";import"./ColumnConfigDialog-BRNq5mWj.js";import"./DraggableList-Dkqic5TC.js";import"./search-iSsdT6KZ.js";import"./Input-1Y2R_X8G.js";import"./useControlled-SaIcnxAb.js";import"./Button-Zo--VZAt.js";import"./small-cross-Bf2eb-iw.js";import"./ActionButton-CZYvn9-t.js";import"./Checkbox-C5nK5KW-.js";import"./useValueChanged-ZImMoGMC.js";import"./CollapsiblePanel-GPhcuTeQ.js";import"./MultiColumnSortDialog-CaZRQ9xm.js";import"./MenuTrigger-Dtx__UvO.js";import"./CompositeItem-C-2rS0Vr.js";import"./ToolbarRootContext-Vpkb3Bpo.js";import"./getDisabledMountTransitionStyles-ChyNZQXU.js";import"./getPseudoElementBounds-bTOtxTD8.js";import"./chevron-down-B1sc9iOG.js";import"./index-B-spnNIp.js";import"./error-DapfmyD2.js";import"./BaseCbacBanner-BVGponFm.js";import"./makeExternalStore-CGIpAmlW.js";import"./Tooltip-Cg4WV2Y-.js";import"./PopoverPopup-pcdPHlvL.js";import"./debounce-Bwm-jsNA.js";import"./useOsdkClient-qospIppq.js";import"./tick-Bm2gRhmA.js";import"./DropdownField-BO1TnfSs.js";import"./isEqual-C3vn-jJx.js";import"./withOsdkMetrics-DE_nej2a.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
