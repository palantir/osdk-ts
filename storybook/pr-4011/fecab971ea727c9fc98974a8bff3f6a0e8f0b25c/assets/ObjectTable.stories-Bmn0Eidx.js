import{j as i}from"./iframe-Cbv5zznp.js";import{O as p}from"./object-table-Bn5bQJkg.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DyJf1l_h.js";import"./preload-helper-DqfcifpH.js";import"./Table-BgFM93fE.js";import"./index-D2aFmDJC.js";import"./Dialog-BA607rzO.js";import"./cross-C8I2PI6u.js";import"./svgIconContainer-BWSQzhSR.js";import"./useBaseUiId-CbroaXAW.js";import"./InternalBackdrop-CUgFheWq.js";import"./composite-DJiR_4ty.js";import"./index-CCzNRBOI.js";import"./index-5hCgKDxn.js";import"./index-D_4oJywF.js";import"./useEventCallback-r3b2hAl0.js";import"./SkeletonBar-OKZ2wWwG.js";import"./LoadingCell-C89HmfYL.js";import"./ColumnConfigDialog-cf5LyL_h.js";import"./DraggableList-7LB8K7ON.js";import"./search-CH6DBRTT.js";import"./Input-DmJSS6xV.js";import"./useControlled-BoBGM7g4.js";import"./Button-Tfyx2Upy.js";import"./small-cross-OENn1soQ.js";import"./ActionButton-CRpLCn8e.js";import"./Checkbox-DrLDryFH.js";import"./useValueChanged-CRrnyi5j.js";import"./CollapsiblePanel-DUHKDOmV.js";import"./MultiColumnSortDialog-BNLYytTp.js";import"./MenuTrigger-DvQE4buu.js";import"./CompositeItem-CWAeob4t.js";import"./ToolbarRootContext-CLkLs3Pj.js";import"./getDisabledMountTransitionStyles-Drv_mS0M.js";import"./getPseudoElementBounds-CnQ2m5T7.js";import"./chevron-down-DHe7MR3-.js";import"./index-B-Z3zT8c.js";import"./error-DnP2O5g6.js";import"./BaseCbacBanner-DkzBhqtE.js";import"./makeExternalStore-BZhL-95P.js";import"./Tooltip-C20r3_Es.js";import"./PopoverPopup-DcG6I0rn.js";import"./debounce-Do5MJNfP.js";import"./useOsdkClient-CLoY1UKz.js";import"./tick-CdvKMWYt.js";import"./DropdownField-D-ungKoa.js";import"./isEqual-Bvhr1-hP.js";import"./withOsdkMetrics-ByXJuDkr.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
