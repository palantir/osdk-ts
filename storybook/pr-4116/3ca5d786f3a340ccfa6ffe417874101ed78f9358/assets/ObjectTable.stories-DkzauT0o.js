import{j as i}from"./iframe-DxVz5dus.js";import{O as p}from"./object-table-DOOpOjxQ.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DOf8suvE.js";import"./preload-helper-dij9S3RJ.js";import"./Table-D-CEaVeb.js";import"./index-C_W-VT0S.js";import"./Dialog-BDHH0maw.js";import"./cross-IXW3xmZm.js";import"./svgIconContainer-ftSbGeci.js";import"./useBaseUiId-BWXYzcoK.js";import"./InternalBackdrop-B1SYraZj.js";import"./composite-BDVlfNwN.js";import"./index-ClRjmnyd.js";import"./index-gok66sxW.js";import"./index-BiJTgGJY.js";import"./useEventCallback-CX0aAoan.js";import"./SkeletonBar-DERF-gsY.js";import"./LoadingCell-CvxZL9kC.js";import"./ColumnConfigDialog-J_BbbcKh.js";import"./DraggableList-L-6Y09gw.js";import"./search-C5WRo3gI.js";import"./Input-BLn4Lqlk.js";import"./useControlled-laJEGVBG.js";import"./Button-DkKQyNy7.js";import"./small-cross-DNkarUz2.js";import"./ActionButton-B5XzNvTu.js";import"./Checkbox-5nk_Ef0z.js";import"./useValueChanged-C6gCry8f.js";import"./CollapsiblePanel-emSmjH55.js";import"./MultiColumnSortDialog-CLj_cEaP.js";import"./MenuTrigger-m_qywH2D.js";import"./CompositeItem-DZxjvmIc.js";import"./ToolbarRootContext-BhnwoH5s.js";import"./getDisabledMountTransitionStyles-jz6kYw7l.js";import"./getPseudoElementBounds-DLZHdgfT.js";import"./chevron-down-CJ_JWdST.js";import"./index-DQFNyqTE.js";import"./error-l8hi8NpA.js";import"./BaseCbacBanner-DAlbmB8O.js";import"./makeExternalStore-6HRE-tXR.js";import"./Tooltip-CIQ48OAI.js";import"./PopoverPopup-DDubBzbx.js";import"./debounce-HK4ZQpWE.js";import"./useOsdkClient-DWdsPkLC.js";import"./tick-B2s8zm1S.js";import"./DropdownField-CXyq1EI7.js";import"./isEqual-BBaINTWv.js";import"./withOsdkMetrics-BUQXNERU.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
