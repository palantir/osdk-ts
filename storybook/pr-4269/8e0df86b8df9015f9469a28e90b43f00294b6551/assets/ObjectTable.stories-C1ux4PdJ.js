import{j as i}from"./iframe-CSjrP8vI.js";import{O as p}from"./object-table-CT8zBU9b.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DpJUJNB2.js";import"./preload-helper-Cx2hoj0m.js";import"./Table-Bz2vcI-y.js";import"./index-CqYglBD0.js";import"./Dialog-ebHFZ4K-.js";import"./cross-Ds3xYnVZ.js";import"./svgIconContainer-B7BQRztY.js";import"./useBaseUiId-DcgW2BGe.js";import"./InternalBackdrop-DRh1UujG.js";import"./composite-CAXBU4pD.js";import"./index-BedFYm95.js";import"./index-BN7bp0b2.js";import"./index-B4CwIOCa.js";import"./useEventCallback-CRfAaycK.js";import"./SkeletonBar-CUZm-PKw.js";import"./LoadingCell-CLME_5DX.js";import"./ColumnConfigDialog-CjkSAnDu.js";import"./DraggableList-DDDC3Ohe.js";import"./search-BM_j1Cww.js";import"./Input-DG23LIw2.js";import"./useControlled-W118GxB4.js";import"./Button-nWxTMLuc.js";import"./small-cross-B5v1tapE.js";import"./ActionButton-DYIYoWW6.js";import"./Checkbox-C9mjcyeE.js";import"./useValueChanged-Bqlwrqtn.js";import"./CollapsiblePanel-B6tadX4-.js";import"./MultiColumnSortDialog-DF0ODZMw.js";import"./MenuTrigger-BR3Xx0z3.js";import"./CompositeItem-C2wpcQLE.js";import"./ToolbarRootContext-Skd8opG_.js";import"./getDisabledMountTransitionStyles-Cc4xA-eS.js";import"./getPseudoElementBounds-D0jv3We1.js";import"./chevron-down-xJOpychc.js";import"./index-v62Ii5_v.js";import"./error-Du9W1yMi.js";import"./BaseCbacBanner-BzKHkrOU.js";import"./makeExternalStore-DptFAV08.js";import"./Tooltip-Cg04CKbW.js";import"./PopoverPopup-BsQv3X8u.js";import"./debounce-BFRee1ws.js";import"./useOsdkClient-DS20s_-p.js";import"./tick-BEtFRrY5.js";import"./DropdownField-DG8Fepg7.js";import"./isEqual-D0FZ_3QJ.js";import"./withOsdkMetrics-sMcDJBip.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
