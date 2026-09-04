import{j as i}from"./iframe-C8SPWzFD.js";import{O as p}from"./object-table-CEVvWNl8.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DrmM__7i.js";import"./preload-helper-0-zjDLXH.js";import"./Table-Sy8XZYjj.js";import"./index-CGimpnDA.js";import"./Dialog-sJbwuz-W.js";import"./cross-yQkVXtk-.js";import"./svgIconContainer-B40AAOuO.js";import"./useBaseUiId-C57VmH3J.js";import"./InternalBackdrop-DxF2V30r.js";import"./composite-DPxUJccb.js";import"./index-VKcShZXo.js";import"./index-BwAo9-Ip.js";import"./index-DI8w2Wrl.js";import"./useEventCallback-DjuFsSbR.js";import"./SkeletonBar-o-eg2SlE.js";import"./LoadingCell-D10QJ8hN.js";import"./ColumnConfigDialog-DgDCdwV7.js";import"./DraggableList-DBkiK7wC.js";import"./search-bHMR0YBt.js";import"./Input-B7RJGze7.js";import"./useControlled-Yy6Nm7q-.js";import"./Button-BSl9QmF1.js";import"./small-cross-94u2Um9w.js";import"./ActionButton-BkWFOmHW.js";import"./Checkbox-DPCHiLIB.js";import"./useValueChanged-DPIPHUs8.js";import"./CollapsiblePanel-BSR-rgRE.js";import"./MultiColumnSortDialog-DM-SV7VS.js";import"./MenuTrigger-DYJhdpX_.js";import"./CompositeItem--Cz5F4Xa.js";import"./ToolbarRootContext-BVFmYY-d.js";import"./getDisabledMountTransitionStyles-XmNCU5wP.js";import"./getPseudoElementBounds-ckCn8Eoc.js";import"./chevron-down-C45MQu-J.js";import"./index-7TRVPqPj.js";import"./error-B5OE4NvJ.js";import"./BaseCbacBanner-WRiAVdzF.js";import"./makeExternalStore-C93JHYzf.js";import"./Tooltip-BOvX8lE8.js";import"./PopoverPopup-D5c_P4sS.js";import"./debounce-B5Hx5zW4.js";import"./useOsdkClient-Gc4DZ-CV.js";import"./tick-Dd7xtzHi.js";import"./DropdownField-C8LjKSnS.js";import"./isEqual-C4Xo_KzQ.js";import"./withOsdkMetrics-jd8u8gq8.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
